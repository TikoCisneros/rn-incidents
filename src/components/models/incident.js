/* eslint-disable camelcase */
class Incident {
  constructor({
    _id,
    location,
    date,
    created_on,
    status,
    type,
    subtype,
    definition,
    description,
  }) {
    this.id = _id;
    this.location = location;
    this.date = date;
    this.created_on = created_on;
    this.status = status;
    this.type = type;
    this.subtype = subtype;
    this.definition = definition;
    this.description = description;
  }
}

export default Incident;