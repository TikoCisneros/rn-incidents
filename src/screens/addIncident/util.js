import { isValid } from '../../common/util';

const isButtonDisabled = (definition, type, subtype) =>
  !(isValid(definition.value) && isValid(type.value) && isValid(subtype.value));

const isDifferentSelection = (oldItem, newItem) => {
  const isValidOldValue = isValid(oldItem.value);

  if (isValidOldValue) {
    return oldItem.value !== newItem.value;
  }

  return !isValidOldValue;
};

const filterItemsByPayloadCode = (items, code) =>
  items.filter((item) => item.payload.code === code);

export { isButtonDisabled, isDifferentSelection, filterItemsByPayloadCode };
