import { isValid } from '../../common/util';
import { CATALOG_NAMES } from '../../common/constants';

const findItemsByCatalogName = (name, catalogs) => {
  const result = catalogs.find((catalog) => catalog.name === name);

  if (isValid(result)) {
    return result.items;
  }

  return [];
};

const buildIncidentCatalogs = (wsCatalogs) => ({
  definitions: findItemsByCatalogName(
    CATALOG_NAMES.incidentDefinition,
    wsCatalogs,
  ),
  types: findItemsByCatalogName(CATALOG_NAMES.incidentType, wsCatalogs),
  subtypes: findItemsByCatalogName(CATALOG_NAMES.incidentSubtype, wsCatalogs),
  channels: findItemsByCatalogName(CATALOG_NAMES.incidentChannel, wsCatalogs),
});

export { findItemsByCatalogName, buildIncidentCatalogs };
