import React, { useRef } from 'react';

import Selector from '../common/selector';

import BottomSheet from './bottomSheetSelectList';

import {
  ContentContainer,
  Textarea,
  Image,
  Button,
} from './addIncident.styles';

const PLACEHOLDER_DEFINITION = 'Elija una definición';
const PLACEHOLDER_TYPE = 'Elija un tipo';
const PLACEHOLDER_SUBTYPE = 'Elija un subtipo';
const PLACEHOLDER_DESCRIPTION = 'Agregue una descripción (Opcional)';

const imgUrl = require('../../res/imgs/map.png');

const AddIncident = ({
  onAddPress,
  isButtonDisabled,
  definitionItems,
  onDefinitionPress,
  definitionValue = {},
  typeItems,
  onTypePress,
  typeValue = {},
  subtypeItems,
  onSubtypePress,
  subtypeValue = {},
  descriptionValue,
  onDescriptionChange,
}) => {
  const refBSDefinition = useRef();
  const refBSType = useRef();
  const refBSSubtype = useRef();

  const onPressDefinition = () => refBSDefinition.current.open();

  const onPressDefinitionItem = (item) => {
    onDefinitionPress(item);
    refBSDefinition.current.close();
  };

  const onPressType = () => refBSType.current.open();

  const onPressTypeItem = (item) => {
    onTypePress(item);
    refBSType.current.close();
  };

  const onPressSubtype = () => refBSSubtype.current.open();

  const onPressSubtypeItem = (item) => {
    onSubtypePress(item);
    refBSSubtype.current.close();
  };

  return (
    <>
      <ContentContainer>
        <Selector
          placeholder={PLACEHOLDER_DEFINITION}
          onPress={onPressDefinition}
          value={definitionValue.value}
        />
        <Selector
          placeholder={PLACEHOLDER_TYPE}
          onPress={onPressType}
          value={typeValue.value}
        />
        <Selector
          placeholder={PLACEHOLDER_SUBTYPE}
          onPress={onPressSubtype}
          value={subtypeValue.value}
        />
        <Textarea
          rowSpan={5}
          bordered
          placeholder={PLACEHOLDER_DESCRIPTION}
          value={descriptionValue}
          onChangeText={onDescriptionChange}
        />
        <Image source={imgUrl} resizeMode="cover" />
        <BottomSheet
          ref={refBSDefinition}
          items={definitionItems}
          onItemPress={onPressDefinitionItem}
        />
        <BottomSheet
          ref={refBSType}
          items={typeItems}
          onItemPress={onPressTypeItem}
        />
        <BottomSheet
          ref={refBSSubtype}
          items={subtypeItems}
          onItemPress={onPressSubtypeItem}
        />
      </ContentContainer>
      <Button
        title="Agregar"
        onPress={onAddPress}
        secondary
        disabled={isButtonDisabled}
      />
    </>
  );
};

export default AddIncident;
