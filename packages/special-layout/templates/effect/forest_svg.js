import './forest_svg.html';

const treeTypes = [
  { href: '#birchtree', width: 160, height: 422 },
  { href: '#smalltree', width: 22, height: 197 },
  { href: '#christmastree', width: 222, height: 480 },
];

const treeLines = {
  layer6: (x) => {
    if (x <= 500) return 1800;
    if (x > 500 && x < 5850) return 2000;
    if (x >= 5850) return 1800;
  },
  layer5: (x) => {
    if (x <= 300) return 900;
    if (x > 300 && x <= 600) return 1200;
    if (x > 600 && x <= 1400) return 1300;
    if (x > 1400 && x <= 2600) return 1550;
    if (x > 2600 && x <= 3300) return 1450;
    if (x > 3300 && x <= 5300) return 1500;
    if (x > 5300) return 1300;
  },
  layer4: (x) => {
    if (x < 100) return 700;
    if (x >= 100 && x < 500 ) return 1000;
    if (x >= 500 && x < 700 ) return 900;
    if (x >= 700 && x < 1000) return 1000;
    if (x >= 1000 && x < 2350) return 1200;
    if (x >= 2350 && x < 3800) return 1500;
    if (x >= 3800 && x < 5100) return 1100;
    if (x >= 5100) return 900;
  },
  layer3: (x) => {
    if (x < 100) return 1400;
    if (x >= 100 && x < 200) return 1350;
    if (x >= 200 && x < 300) return 1150;
    if (x >= 300 && x < 400) return 1050;
    if (x >= 400 && x < 900) return 950;
    if (x >= 900 && x < 1400) return 850;
    if (x >= 1400 && x < 2400) return 1050;
    if (x >= 2400 && x < 3400) return 1150;
    if (x >= 3400 && x < 4400) return 1050;
    if (x >= 4400) return 850;
  },
  layer2: (x) => {
    if (x < 2100) return 700;
    if (x >= 2100 && x < 3600) return 900;
    if (x >= 3600) return 700;
  }
};

Template.forest_svg.viewmodel({
  styles: {},

  svgWidth: 6000,
  svgHeight: 1820,
  translateOffset: 0,

  onCreated() {
    this.templateInstance.cachedTrees = {};
  },

  offset(multiplier) {
    return multiplier * 1;
  },

  transform(translateX, translateY, scale, inverted, elementWidth, elementHeight) {
    const scalePrefix = inverted ? '-' : '';
    const translateXDueToScale = inverted ? elementWidth * Math.abs(scale) : 0;
    return `translate(${translateX + translateXDueToScale} ${translateY - (elementHeight * scale)}) scale(${scalePrefix}${scale} ${scale})`;
  },

  trees(minScale, maxScale, treeLine) {
    if (this.templateInstance.cachedTrees[treeLine]) {
      return this.templateInstance.cachedTrees[treeLine];
    }

    let trees = [];
    const maxWidth = this.svgWidth();
    let x = 0;
    while (x < maxWidth) {
      const tree = this.getRandomTree(x, treeLine, minScale, maxScale);
      x += Math.floor(tree.width * tree.scale * (3 / 4));
      trees.push(tree);
    }
    this.templateInstance.cachedTrees[treeLine] = trees;
    return trees;
  },

  getRandomTree(x, treeLine, minScale, maxScale) {
    const treeType = Random.choice(treeTypes);
    inverted = Random.fraction() > 0.5 ? true : false;
    const scale = Random.fraction() * (maxScale - minScale) + minScale;
    const scaledSize = treeType.width * scale;
    const translateY = treeLines[treeLine](x + scaledSize);

    return {
      href: treeType.href,
      width: treeType.width,
      height: treeType.height,
      translateX: x,
      translateY: translateY,
      inverted: inverted,
      scale: scale
    };
  },

  onDestroyed() {
    this.templateInstance.cachedTrees = null;
  }

});
