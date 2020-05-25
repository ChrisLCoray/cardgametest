export const Header: angular.IComponentOptions = {
  template: require('./header.component.html'),
  controller: function () { // eslint-disable-line babel/object-shorthand
    this.header = 'Memory Card Game Test';
  }
};
