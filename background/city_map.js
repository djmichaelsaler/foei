cityMap = {
  process: function (method, data, id) {
    if (trace) {
      console.log('CityMapService.' + method, data);
    }
    switch (method) {
      case 'updateEntity':
        greatBuilding.checkArcBonus(data);
        greatBuilding.storeBuildingInfo(id, data[0].state.forge_points_for_level_up);
        break;
      case 'reset':
        greatBuilding.checkArcBonus(data);
        break;
      default:
        if (trace || debug) {
          console.log('CityMapService.' + method + ' is not used');
        }
    }
  }
};
