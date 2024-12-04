class CircleMap {
  static instance;
  static getInstance(containerId, canvasId) {
    if (!this.instance) this.instance = new CircleMap(containerId, canvasId);
    else this.instance.init();

    return this.instance;
  }

  userLevels = [];
  levels = [];
  loaded = false;
  lastData = null;
  levelCount = 6;
  maxNonBinaryLevelCount = 6;
  maxBinaryLevelCount = 13;
  images = {};
  userIdLabel = 'id: ';
  userAliasLabel = ' @';
  emptyIconUrl = './assets/images/User.png';
  defaultIconUrl = './assets/images/user-purple.svg';
  statusRadius = 7;
  statusMargin = 2;
  iconMargin = 4;

  onTooltip = function (userId) {};
  hoveredUserId = -1;
  plusButtonHovered = false;
  loadUserAvatar = userId => {};
  loadNextLevel = id => {};
  nextLevelLoading = false;

  mouseDown = false;
  lastMousePosition = { x: 0, y: 0 };
  lastMouseCanvasPosition = { x: 0, y: 0 };
  lastPinchDistance = 0;

  panSpeed = 1;
  panOffset = { x: 0, y: 0 };

  zoomLevel = 1;
  zoomFactor = 1.15;
  maxZoom = 8;
  minZoom = 0.5;
  minBinaryLevel = 6;
  binaryBackground = true;
  maxPanDrawLevel = 6;
  highlightsOnlyToConnected = true;

  constructor(containerId, canvasId) {
    this.containerId = containerId;
    this.canvasId = canvasId;
    this.init();
    document.body.addEventListener('mouseup', e => {
      this.onMouseUp(e);
    });
    document.body.addEventListener('mousemove', e => {
      this.onMouseMove(e);
    });

    document.body.addEventListener('touchcancel', e => {
      this.onMouseUp(e);
    });
    document.body.addEventListener('touchend', e => {
      this.onMouseUp(e);
    });

    this.defaultImage = new Image();
    this.defaultImage.addEventListener(
      'load',
      () => {
        this.loaded = true;

        if (this.lastData) this.setFromDataLevelsBinary(this.lastData);
        else if (this.userLevels) this.setFromDataLevels(this.userLevels);
      },
      false
    );
    this.defaultImage.addEventListener('error', function (e) {
      console.error(e);
    });
    this.defaultImage.src = this.emptyIconUrl;
  }
  init() {
    //get current container and canvas
    let container = document.getElementById(this.containerId);
    let canvas = document.getElementById(this.canvasId);

    //unbind events from the old canvas
    if (canvas !== this.canvas && this.canvas) {
      this.canvas.removeEventListener('wheel', e => {
        this.onWheel(e);
      });
      this.canvas.removeEventListener('mousedown', e => {
        this.onMouseDown(e);
      });

      this.canvas.removeEventListener('touchstart', e => {
        this.onTouchStart(e);
      });
      this.canvas.removeEventListener('touchmove', e => {
        this.onTouchMove(e);
      });
    }

    // bind container and canvas
    container.style.height = '100%';
    this.container = container;
    this.canvas = canvas;

    // add events to the new canvas
    this.canvas.addEventListener('wheel', e => {
      this.onWheel(e);
    });
    this.canvas.addEventListener('mousedown', e => {
      this.onMouseDown(e);
    });

    this.canvas.addEventListener('touchstart', e => {
      this.onTouchStart(e);
    });
    this.canvas.addEventListener('touchmove', e => {
      this.onTouchMove(e);
    });

    let containerRect = this.container.getBoundingClientRect();
    this.canvasWidth = Math.floor(containerRect.width);
    this.canvasHeight = Math.floor(containerRect.height);

    this.bindTooltip();

    // rebing context of the canvas
    var ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'gray';
    ctx.textAlign = 'center';
    this.ctx = ctx;
    this.resize();
    this.reset();
  }

  bindTooltip() {
    this.tooltipDiv = document.getElementById('tooltip');
    this.tooltipLabelDiv = document.getElementById('tooltipLabel');
    this.tooltipNewDiv = document.getElementById('tooltipNew');
    this.tooltipDateDiv = document.getElementById('tooltipDate');

    this.tooltipOvertakingDiv = document.getElementById('tooltipOvertaking');
    this.tooltipDescriptionDiv = document.getElementById('tooltipDescription');

    this.tooltipLoaderDiv = document.getElementById('tooltipLoader');

    this.tooltipDiv.parentElement.removeChild(this.tooltipDiv);
    document.body.appendChild(this.tooltipDiv);
  }

  zoomIn(eOptional) {
    if (this.loaded) this.zoomChanged(this.zoomFactor, eOptional);
  }

  zoomOut(eOptional) {
    if (this.loaded) this.zoomChanged(1 / this.zoomFactor, eOptional);
  }

  zoomChanged(scrollAmount, eOptional) {
    //this.ctx.transform(scrollAmount, 0, 0, scrollAmount, (ctx.getTransform().e - this.canvasWidth / 2) * -0.1 * Math.sign(e.deltaY), (ctx.getTransform().e - this.canvasHeight / 2) * -0.1 * Math.sign(e.deltaY));

    if (
      this.zoomLevel * scrollAmount < this.maxZoom &&
      this.zoomLevel * scrollAmount > this.minZoom
    )
      this.zoomLevel *= scrollAmount;
    if (eOptional) {
      eOptional.drawRequired = true;
      this.onMouseMove(eOptional);
    } else this.drawAll();
  }

  reset() {
    this.userLevels.length = 0;
    this.levels.length = 0;
    this.lastData = null;
    this.panOffset.x = 0;
    this.panOffset.y = 0;
    this.zoomLevel = 1;
    this.drawAll();
  }

  setFromDataLevelsBinary(userLevels) {
    this.reset();

    // convert [][] to []
    let users = [];
    if (userLevels[0].length) {
      for (let i = 0; i < userLevels.length; i++) {
        for (let j = 0; j < userLevels[i].length; j++) {
          users.push(userLevels[i][j]);
        }
      }
    } else users = userLevels;

    //clean up parent from root user
    users[0].referrerId = 0;

    //// modify top user to the same structure as everyone else
    //if (!users[0].referralIds || !users[0].referralIds.length) {
    //	users[0].referralIds = [null, null];
    //	for (let i = 0; i < 2; i++) {
    //		if (userLevels[1] && userLevels[1][i])
    //			users[0].referralIds[i] = userLevels[1][i].userId;
    //	}
    //}

    this.lastData = users;
    if (!this.loaded) {
      return;
    }

    for (let i = 0; i < users.length; i++) {
      this.loadUser(users[i]);
    }
    this.dataLoaded(users);
  }

  appendDataLevelsBinary(userLevels) {
    // convert [][] to []
    let users = [];
    if (userLevels[0].length) {
      for (let i = 0; i < userLevels.length; i++) {
        for (let j = 0; j < userLevels[i].length; j++) {
          users.push(userLevels[i][j]);
        }
      }
    } else users = userLevels;
    this.lastData = this.lastData.concat(users);

    for (let i = 0; i < users.length; i++) {
      this.loadUser(users[i]);
    }

    this.dataLoaded(this.lastData);
  }

  setFromDataLevels(levels, notReset) {
    if (!notReset) this.reset();
    this.lastData = null;

    //convert users list to userLevels
    if (levels.length && levels[0].length === undefined) {
      this.userLevels = [];
      for (let i = 0; i < levels.length; i++) {
        if (levels[i].id) levels[i].userId = levels[i].id;
        if (!levels[i].refLevel) levels[i].refLevel = 0;

        while (this.userLevels.length < levels[i].refLevel + 1) {
          this.userLevels.push([]);
        }
        this.userLevels[levels[i].refLevel].push(levels[i]);
      }
    } else this.userLevels = levels;

    if (this.userLevels.length > this.maxNonBinaryLevelCount)
      this.userLevels.length = this.maxNonBinaryLevelCount;

    if (!this.loaded) {
      return;
    }

    for (let l = 0; l < this.userLevels.length; l++)
      for (let i = 0; i < this.userLevels[l].length; i++) {
        this.loadUser(this.userLevels[l][i]);
      }
    this.levels = this.getPositions(this.userLevels);
    this.binaryBackground = false;
    this.drawAll(); //this.dataLoaded(users);
  }

  setDataLevel(index, level) {
    if (!this.userLevels) {
      this.userLevels = [];
    }
    while (this.userLevels.length < index - 1) {
      this.userLevels.push([]);
    }
    this.userLevels[index] = level;
    this.setFromDataLevels(this.userLevels, true);
  }

  dataLoaded(users) {
    this.binaryBackground = true;
    let idMap = {};
    for (let i = 0; i < users.length; i++) {
      idMap[users[i].userId] = users[i];
      users[i].referralIds = [];
    }
    let userLevels = [[users[0]]];

    // set child ids for parents
    for (let i = 0; i < users.length; i++) {
      if (idMap[users[i].referrerId]) {
        idMap[users[i].referrerId].referralIds.push(users[i].userId);
      }
    }

    for (let l = 0; l < this.maxBinaryLevelCount; l++) {
      // go through levels
      userLevels.push([]);
      let usersAdded = false;
      // go through users of current level to find children to fill next level
      for (let u = 0; u < userLevels[l].length; u++) {
        if (!userLevels[l][u]) {
          userLevels[l + 1].push(null);
          userLevels[l + 1].push(null);
          continue;
        }
        let childrenIds = userLevels[l][u].referralIds;
        if (childrenIds) {
          for (let i = 0; i < 2; i++) {
            if (
              childrenIds[i] !== undefined &&
              childrenIds[i] !== null &&
              idMap[childrenIds[i]] &&
              idMap[childrenIds[i]].userId
            ) {
              userLevels[l + 1].push(idMap[childrenIds[i]]);
              usersAdded = true;
            } else userLevels[l + 1].push(null);
          }
        }
      }
      if (!usersAdded) {
        userLevels.pop();
        break;
      }
    }
    this.userLevels = userLevels;
    this.levels = this.getPositions(userLevels);
    this.drawAll();
  }

  loadUser(user) {
    if (user.id) {
      user.userId = user.id;
    }
    if (user.marketingReferrer) {
      user.referrerId = user.marketingReferrer;
    }
    if (!user.userId) return;

    //if (user === null) {
    //	this.userLevels[l][i] = { avatar: this.emptyIconUrl };
    //	user = this.userLevels[l][i];
    //}

    if (!user.avatar) {
      this.loadUserAvatar(user);
      return;
    }
    // check if image is already exist
    if (this.images[user.avatar] !== undefined) return;

    this.loadImage(user.avatar);
  }

  loadImage(url) {
    let img = new Image();
    img.addEventListener(
      'load',
      () => {
        this.images[url] = img;
        this.imageLoaded();
      },
      false
    );
    img.addEventListener('error', e => {
      //console.error(e);
      this.imageLoaded();
    });
    img.src = url;
    this.images[url] = null;
  }

  imageLoaded() {
    this.drawAll();
  }

  // Input

  onMouseMove(e) {
    if (!e) return;
    if (!this.canvas) this.init();

    let drawRequired = e.drawRequired;
    if (this.mouseDown) {
      // panning

      //this.ctx.transform(1, 0, 0, 1, (e.pageX - this.lastMousePosition.x) / ctx.getTransform().a * this.panSpeed, (e.pageY - this.lastMousePosition.y) / ctx.getTransform().d * this.panSpeed);
      this.panOffset.x +=
        ((e.pageX - this.lastMousePosition.x) / this.zoomLevel) * this.panSpeed;
      this.panOffset.y +=
        ((e.pageY - this.lastMousePosition.y) / this.zoomLevel) * this.panSpeed;

      drawRequired = true;
    }
    //else { // hover
    let rect = this.canvas.getBoundingClientRect();
    //this.tooltipDiv.style.left = e.pageX + 10 + 'px';
    //this.tooltipDiv.style.top = (e.pageY - this.tooltipDiv.clientHeight) - 10 + 'px';

    let canvasX =
      ((e.clientX - rect.left) * this.canvasWidth) / rect.width -
      this.canvasWidth * 0.5;
    let canvasY =
      ((e.clientY - rect.top) * this.canvasHeight) / rect.height -
      this.canvasHeight * 0.5;
    canvasX = canvasX / this.zoomLevel - this.panOffset.x;
    canvasY = canvasY / this.zoomLevel - this.panOffset.y;
    this.lastMouseCanvasPosition.x = canvasX;
    this.lastMouseCanvasPosition.y = canvasY;

    let userIdToHover = -1;
    let plusButtonHovered = 0;
    this.tooltipDiv.style.visibility = 'hidden';
    this.tooltipLoaderDiv.style.visibility = 'hidden';
    this.setTooltipInfoVisibility(false);

    if (!this.mouseDown) {
      for (let l = 0; l < this.levels.length; l++) {
        let positions = this.levels[l];
        let levelRadius = this.getLevelRadius(l);
        let levelRadiusForPosition = levelRadius / Math.max(1, l);
        let radius = this.getIconSize(l, positions.length, levelRadius);

        //
        let dx = canvasX;
        let dy = canvasY;
        let d = dx * dx + dy * dy;
        if (
          d < (levelRadius - radius) * (levelRadius - radius) ||
          d > (levelRadius + radius) * (levelRadius + radius)
        )
          continue;

        let canvasSignX = Math.sign(canvasX);
        let canvasSignY = Math.sign(canvasY);

        for (var p = 0; p < positions.length; p++) {
          if (
            l > 2 &&
            Math.abs(positions[p].x) > 0.1 &&
            Math.abs(positions[p].y) > 0.1 &&
            (Math.sign(positions[p].x) !== canvasSignX ||
              Math.sign(positions[p].y) !== canvasSignY)
          )
            continue;
          dx = positions[p].x * levelRadiusForPosition - canvasX;
          dy = positions[p].y * levelRadiusForPosition - canvasY;
          if (
            dx * dx + dy * dy < radius * radius &&
            this.userLevels[l] &&
            this.userLevels[l][p] &&
            this.userLevels[l][p].userId
          ) {
            let tooltipRect = this.tooltipDiv.getBoundingClientRect();
            this.tooltipDiv.style.left =
              (((positions[p].x * levelRadiusForPosition +
                radius +
                this.panOffset.x) *
                this.zoomLevel +
                this.canvasWidth * 0.5) *
                rect.width) /
                this.canvasWidth +
              rect.left +
              10 +
              e.pageX -
              e.clientX +
              'px';
            this.tooltipDiv.style.top =
              (((positions[p].y * levelRadiusForPosition + this.panOffset.y) *
                this.zoomLevel +
                this.canvasHeight * 0.5) *
                rect.height) /
                this.canvasHeight +
              rect.top -
              Math.floor(tooltipRect.height * 0.5) +
              e.pageY -
              e.clientY +
              'px';

            this.tooltipDiv.style.visibility = 'visible';
            this.tooltipLoaderDiv.style.visibility = 'visible';

            userIdToHover = this.userLevels[l][p].userId;

            // reset if mouse moves again in the icon
            if (
              this.userLevels[l][p].loaded &&
              this.hoveredUserId !== this.userLevels[l][p].userId
            ) {
              this.userLevels[l][p].loading = false;
              this.userLevels[l][p].loaded = false;
            }

            if (!this.userLevels[l][p].loading) {
              this.onTooltip(this.userLevels[l][p]);
              this.userLevels[l][p].loading = true;
              this.setTooltipInfoVisibility(false);
              break;
            }
            if (!this.userLevels[l][p].loaded) break;

            this.updateTooltip(this.userLevels[l][p]);
            break;
          }
        }
      }

      // plus buttons
      if (
        this.levels.length < this.maxBinaryLevelCount &&
        this.binaryBackground &&
        !this.nextLevelLoading
      ) {
        let dx = 0;
        let dy = 0;
        this.loopThroughPlusButtons((i, x, y, iconRadius) => {
          dx = x - canvasX;
          dy = y - canvasY;
          if (dx * dx + dy * dy < iconRadius * iconRadius) {
            plusButtonHovered = i + 1;
            return true;
          }
        });
      }
      if (this.plusButtonHovered !== plusButtonHovered) drawRequired = true;
      this.plusButtonHovered = plusButtonHovered;
    }
    this.drawAll(!drawRequired);
    //}
    this.hoveredUserId = userIdToHover;
    this.lastMousePosition.x = e.pageX;
    this.lastMousePosition.y = e.pageY;
  }
  onMouseUp(e) {
    this.mouseDown = false;

    if (this.plusButtonHovered && !this.nextLevelLoading) {
      this.loadNextLevel(this.levels.length);
    }

    this.drawAll();
  }
  onMouseDown(e) {
    this.mouseDown = true;
  }
  onWheel(e) {
    e.preventDefault();
    if (e.deltaY > 0) this.zoomOut(e);
    else if (e.deltaY < 0) this.zoomIn(e);
  }

  // Touch
  onTouchStart(event) {
    this.lastMousePosition.x = event.changedTouches[0].pageX;
    this.lastMousePosition.y = event.changedTouches[0].pageY;
    this.onMouseDown();
  }
  onTouchEnd(event) {
    this.onMouseUp();
    this.onMouseMove(event.touches[0]);
  }

  onTouchMove(event) {
    event.preventDefault(); // prevent the default behavior of touchmove

    // check if there are exactly two touch points (i.e. fingers) on the screen
    if (event.touches.length === 2) {
      // calculate the distance between the two touch points using the Pythagorean theorem
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch1.clientX - touch2.clientX, 2) +
          Math.pow(touch1.clientY - touch2.clientY, 2)
      );

      // if this is the first pinch event, set lastPinchDistance to the current distance
      if (this.lastPinchDistance === 0) {
        this.lastPinchDistance = distance;
      } else {
        // calculate the difference between the current distance and the last pinch distance
        const pinchDiff = distance - this.lastPinchDistance;

        // perform the zoom based on the pinch difference
        if (pinchDiff > 0) {
          // zoom in
          // your code here to zoom in, for example:
          // targetElement.style.transform = `scale(${currentScale + 0.1})`;
          this.zoomIn();
        } else {
          // zoom out
          // your code here to zoom out, for example:
          // targetElement.style.transform = `scale(${currentScale - 0.1})`;
          this.zoomOut();
        }

        // update lastPinchDistance to the current distance for the next pinch event
        this.lastPinchDistance = distance;
      }
    } else if (event.touches.length === 1) {
      this.onMouseMove(event.touches[0]);
      this.lastPinchDistance = 0;
    } else {
      // reset lastPinchDistance if there are not exactly two touch points on the screen
      this.lastPinchDistance = 0;
    }
  }

  updateTooltip(user) {
    if (user.userId !== this.hoveredUserId) return;
    this.tooltipLabelDiv.innerText = user.Alias
      ? this.userIdLabel + user.ForceID + this.userAliasLabel + user.Alias
      : this.userIdLabel + user.ForceID;
    this.tooltipNewDiv.style.display = user.new ? 'flex' : 'none';
    this.tooltipOvertakingDiv.style.display = user.ovetaking ? 'flex' : 'none';
    this.tooltipDiv.style.visibility = 'visible';
    this.tooltipDateDiv.innerText = user.date;
    this.tooltipDescriptionDiv.innerText =
      'Wallet: ' +
      user.walletAddress.slice(0, 8) +
      '...' +
      user.walletAddress.slice(-8) +
      '\nTier: ' +
      user.tier +
      '\nProfit: ' +
      user.profitDAI +
      ' DAI / ' +
      user.profitMFS +
      ' HC';
    this.setTooltipInfoVisibility(true);
    this.tooltipLoaderDiv.style.visibility = 'hidden';
  }
  setTooltipInfoVisibility(visible) {
    let visibility = visible ? 'visible' : 'hidden';
    this.tooltipLabelDiv.style.visibility = visibility;
    this.tooltipNewDiv.style.visibility = visibility;
    this.tooltipOvertakingDiv.style.visibility = visibility;
    this.tooltipDateDiv.style.visibility = visibility;
    this.tooltipDescriptionDiv.style.visibility = visibility;
  }

  // Work with canvas

  resize() {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.levelRadiusStep = 0.059 * this.canvasWidth;
    this.mainIconSize = 0.049 * this.canvasWidth;
    this.statusRadius = 0.011 * this.canvasWidth;
    this.statusMargin = 0.003 * this.canvasWidth;
    this.iconMargin = 0.006 * this.canvasWidth;
    this.ctx.lineWidth = this.canvasWidth / 1000;
  }

  drawAll(drawOnlyOnResize) {
    let containerRect = this.container.getBoundingClientRect();
    if (
      this.canvas.width !== Math.floor(containerRect.width) ||
      this.canvas.height !== Math.floor(containerRect.height)
    ) {
      this.canvasWidth = Math.floor(containerRect.width);
      this.canvasHeight = Math.floor(containerRect.height);
      this.resize();
    } else if (drawOnlyOnResize) return;

    this.ctx.resetTransform();
    this.ctx.transform(1, 0, 0, 1, this.canvasWidth / 2, this.canvasHeight / 2);
    this.ctx.clearRect(
      -this.canvasWidth / 2,
      -this.canvasHeight / 2,
      this.canvasWidth,
      this.canvasHeight
    );
    this.ctx.transform(this.zoomLevel, 0, 0, this.zoomLevel, 0, 0);
    this.ctx.transform(1, 0, 0, 1, this.panOffset.x, this.panOffset.y);

    if (this.binaryBackground) this.drawBinaryBacks();

    // clear 0-level circle
    this.ctx.globalCompositeOperation = 'destination-out';
    let levelRadius = this.getLevelRadius(1);
    if (this.binaryBackground && levelRadius - this.ctx.lineWidth * 0.5 > 0) {
      this.drawCircle(0, 0, levelRadius - this.ctx.lineWidth * 0.5, true);
    }
    this.ctx.globalCompositeOperation = 'source-over';

    //draw level rings
    this.ctx.strokeStyle = '#4d4d4d';
    for (let l = this.levels.length - 1; l > 0; l--) {
      let levelRadius = this.getLevelRadius(l);
      this.drawCircle(0, 0, levelRadius, false);
    }

    let drawnUserLevels = this.mouseDown
      ? this.maxPanDrawLevel
      : this.levels.length;
    if (this.binaryBackground) {
      this.drawBinaryHighlights(drawnUserLevels);
    }

    for (let l = 0; l < drawnUserLevels; l++) {
      //let levelRadius = this.getLevelRadius(l);
      let positions = this.levels[l];
      this.ctx.strokeStyle = '#4d4d4d';
      //this.drawCircle(0, 0, levelRadius, false);

      let levelRadius = this.getLevelRadius(l);
      let levelRadiusForPosition = levelRadius / Math.max(1, l);
      let radius = this.getIconSize(l, positions.length, levelRadius);

      // positions
      for (var p = 0; p < positions.length; p++) {
        if (this.userLevels[l] && this.userLevels[l][p])
          this.drawUser(
            this.userLevels[l][p],
            positions[p],
            radius,
            levelRadiusForPosition
          );
      }
    }

    //plus buttons
    if (
      this.levels.length < this.maxBinaryLevelCount &&
      this.binaryBackground &&
      !this.nextLevelLoading
    ) {
      let levelRadius = this.getLevelRadius(this.levels.length);
      this.drawCircle(0, 0, levelRadius, false);
      this.loopThroughPlusButtons((i, x, y, iconRadius, plusRadius) => {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.drawCircle(x, y, iconRadius, true);
        this.ctx.globalCompositeOperation = 'source-over';

        this.ctx.strokeStyle =
          this.plusButtonHovered === i + 1 ? '#8d8d8d' : '#4d4d4d';

        this.drawCircle(x, y, iconRadius, false);

        this.ctx.beginPath();
        this.ctx.moveTo(x, y - plusRadius);
        this.ctx.lineTo(x, y + plusRadius);
        this.ctx.moveTo(x - plusRadius, y);
        this.ctx.lineTo(x + plusRadius, y);
        this.ctx.stroke();
      });
      this.ctx.strokeStyle = '#4d4d4d';
    }

    //this.ctx.fillRect(this.lastMouseCanvasPosition.x-5, this.lastMouseCanvasPosition.y-5, 10, 10);
  }

  drawUser(user, position, radius, levelRadiusForPosition) {
    let x = position.x * levelRadiusForPosition;
    let y = position.y * levelRadiusForPosition;

    this.ctx.fillStyle = '#303030';

    this.ctx.globalCompositeOperation = 'destination-out';
    this.drawCircle(x, y, radius, true);
    this.ctx.globalCompositeOperation = 'source-over';

    let image =
      user && user.avatar && this.images[user.avatar]
        ? this.images[user.avatar]
        : this.defaultImage;

    this.ctx.globalCompositeOperation = 'destination-out';
    this.drawCircle(
      x,
      y,
      radius + (this.iconMargin * radius) / this.mainIconSize,
      true
    );
    this.ctx.globalCompositeOperation = 'source-over';
    if (user && user.new) {
      this.ctx.fillStyle = '#860EFF';
      this.drawCircle(
        x,
        y,
        radius + (this.iconMargin * 0.5 * radius) / this.mainIconSize,
        true
      );
    }

    this.drawUserForeground(user, image, x, y, radius);

    if (user && user.ovetaking) {
      this.ctx.fillStyle = 'orange';
      this.ctx.globalCompositeOperation = 'destination-out';
      this.drawCircle(
        x,
        y + radius,
        ((this.statusRadius + this.statusMargin) * radius) / this.mainIconSize,
        true
      );
      this.ctx.globalCompositeOperation = 'source-over';
      this.drawCircle(
        x,
        y + radius,
        (this.statusRadius * radius) / this.mainIconSize,
        true
      );
    }
  }

  drawUserForeground(user, img, x, y, radius) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.clip();
    this.ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);

    if (this.binaryBackground && user.tier) {
      this.ctx.fillStyle = '#FFFFFF50';
      this.ctx.font = Math.floor(radius * 2) + 'px sans-serif';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(
        user.tier,
        x - this.ctx.measureText(user.tier + '').width * 0.5,
        y + radius * 0.1
      );
    }
    this.ctx.restore();

    this.ctx.fillStyle = 'white';
    //this.ctx.shadowColor = "black";

    //this.ctx.strokeText(user.Alias ? user.Alias : user.referrerId, x, y);
    //this.ctx.fillText(user.Alias ? user.Alias : user.referrerId, x, y);

    //this.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  }

  drawBinaryBacks() {
    this.ctx.fillStyle = '#303030';
    this.ctx.strokeStyle = '#4d4d4d';
    for (let l = this.levels.length - 1; l > 0; l--) {
      this.ctx.globalCompositeOperation = 'destination-out';
      let levelRadius = this.getLevelRadius(l);
      if (this.binaryBackground) this.drawCircle(0, 0, levelRadius, true);

      this.ctx.globalCompositeOperation = 'source-over';
      let prevLevelRadius = Math.max(
        0,
        this.getLevelRadius(Math.max(-1, l - 1))
      );

      if (this.binaryBackground) {
        // arcs
        let lPow = Math.pow(2, l);
        for (let a = 0; a < lPow; a += 2) {
          if (
            this.highlightsOnlyToConnected &&
            (!this.userLevels[l] ||
              !this.userLevels[l][a] ||
              !this.userLevels[l][a + 1])
          )
            continue;

          this.ctx.beginPath();
          let angle = (-a * Math.PI * 2) / lPow - Math.PI / lPow + Math.PI;
          let angle2 =
            (-(a + 1) * Math.PI * 2) / lPow - Math.PI / lPow + Math.PI;
          this.ctx.arc(0, 0, levelRadius, angle2, angle);
          this.ctx.arc(0, 0, prevLevelRadius, angle, angle2);

          this.ctx.fill();
        }
      }
    }
  }

  drawBinaryHighlights(fullyHighlightedLevels) {
    let lineWidth = this.ctx.lineWidth;
    this.ctx.lineWidth *= 2;
    for (
      let l = fullyHighlightedLevels - 1;
      l > 1 /*minBackgroundLevel*/;
      l--
    ) {
      let levelRadius = this.getLevelRadius(l);
      let prevLevelRadius = Math.max(
        0,
        this.getLevelRadius(Math.max(-1, l - 1))
      );
      // arcs
      let lPow = Math.pow(2, l);
      let strokeStyle = this.ctx.strokeStyle;

      for (let a = 0; a < lPow; a += 2) {
        let angle = (-a * Math.PI * 2) / lPow - Math.PI / lPow + Math.PI;
        let angle2 = (-(a + 1) * Math.PI * 2) / lPow - Math.PI / lPow + Math.PI;
        let angleMid = (angle + angle2) * 0.5;
        let radiusOffset = this.ctx.lineWidth * 0.25;

        // gradients
        if (!this.userLevels[l] && !this.highlightsOnlyToConnected) continue;
        if (
          (this.userLevels[l] && this.userLevels[l][a]) ||
          !this.highlightsOnlyToConnected
        ) {
          this.ctx.strokeStyle = 'orange';
          this.ctx.beginPath();
          this.ctx.arc(0, 0, prevLevelRadius + radiusOffset, angleMid, angle);
          this.ctx.stroke();

          this.drawLineGradient(
            angle,
            levelRadius - radiusOffset,
            prevLevelRadius - radiusOffset
          );
        }
        if (
          (this.userLevels[l] && this.userLevels[l][a + 1]) ||
          !this.highlightsOnlyToConnected
        ) {
          this.ctx.strokeStyle = 'orange';
          this.ctx.beginPath();
          this.ctx.arc(0, 0, prevLevelRadius + radiusOffset, angle2, angleMid);
          this.ctx.stroke();

          this.drawLineGradient(
            angle2,
            levelRadius - radiusOffset,
            prevLevelRadius - radiusOffset
          );
        }
      }
      this.ctx.strokeStyle = strokeStyle;
    }
    this.ctx.lineWidth *= 0.5;

    for (let l = fullyHighlightedLevels; l < this.levels.length; l++) {
      let levelRadius = this.getLevelRadius(l);
      let prevLevelRadius = Math.max(
        0,
        this.getLevelRadius(Math.max(-1, l - 1))
      );

      let gradient = this.ctx.createRadialGradient(
        0,
        0,
        prevLevelRadius,
        0,
        0,
        levelRadius
      );
      gradient.addColorStop(0, '#6a5322');
      gradient.addColorStop(1, '#343332');
      this.ctx.strokeStyle = gradient;

      this.ctx.lineWidth = Math.abs(levelRadius - prevLevelRadius);

      this.drawCircle(0, 0, (levelRadius + prevLevelRadius) * 0.5);
    }
    this.ctx.lineWidth = lineWidth;
  }

  drawLineGradient(angle, radius1, radius2) {
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    let x1 = cos * radius1;
    let y1 = sin * radius1;
    let x2 = cos * radius2;
    let y2 = sin * radius2;
    var gradient = this.ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop('0', '#4d4d4d');
    gradient.addColorStop('1.0', 'orange');

    this.ctx.strokeStyle = gradient;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

  drawCircle(x, y, radius, fill) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    if (fill) this.ctx.fill();
    else this.ctx.stroke();
  }

  getLevelRadius(level) {
    return (level + 0.8) * this.levelRadiusStep;
  }

  getAngleForCircle(index, length) {
    return (-index * Math.PI * 2) / length - Math.PI / length + Math.PI;
  }

  getIconSize(level, levelLength, levelRadius) {
    let radius = this.mainIconSize / (Math.floor((level + 1) / 2) + 1);

    if (
      level &&
      levelLength *
        (radius + (this.iconMargin * 0.5 * radius) / this.mainIconSize) >
        levelRadius * Math.PI
    ) {
      radius *=
        (levelRadius * Math.PI) /
        (levelLength *
          (radius + (this.iconMargin * 0.5 * radius) / this.mainIconSize));
    }
    return radius;
  }

  // radiuses will be increased by one every circle
  // returns array of levels every of which is a list of positions in an order
  getPositions(dataLevels) {
    let levels = [];
    if (dataLevels && dataLevels.length) this.levelCount = dataLevels.length;
    if (this.levelCount < this.minBinaryLevel)
      this.levelCount = this.minBinaryLevel;
    for (let i = 0; i < this.levelCount; i++) {
      let level = [];
      let positionsCount =
        dataLevels && dataLevels[i] ? dataLevels[i].length : Math.pow(2, i); //Math.pow(2, i);
      for (var j = 0; j < positionsCount; j++) {
        let angle = this.getAngleForCircle(j, positionsCount);
        level.push({ x: Math.cos(angle) * i, y: Math.sin(angle) * i });
      }

      levels.push(level);
    }
    return levels;
  }

  loopThroughPlusButtons(iterationFunc) {
    let levelRadius = this.getLevelRadius(this.levels.length);
    let iconRadius = this.mainIconSize / 3;
    let plusRadius = iconRadius * 0.6;

    let angle = 0;
    let x = 0;
    let y = 0;
    for (let i = 0; i < 4; i++) {
      angle = i * Math.PI * 0.5;
      x = Math.cos(angle) * levelRadius;
      y = Math.sin(angle) * levelRadius;

      if (iterationFunc(i, x, y, iconRadius, plusRadius)) break;
    }
  }
}

export { CircleMap };
