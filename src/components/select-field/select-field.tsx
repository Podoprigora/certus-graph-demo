import { useCallback, useMemo } from "react";

import _get from "lodash/get";
import { styled } from "@mui/material/styles";
import TextField, { BaseTextFieldProps, StandardTextFieldProps, TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import { SelectPlaceholder } from "./select-placeholder";

export type SelectFieldOption = Record<string, unknown>;

// Interfaces
type ExtendedTextFieldProps = BaseTextFieldProps & { InputProps?: TextFieldProps["InputProps"] };

export interface SelectFieldProps<T extends object = SelectFieldOption> extends ExtendedTextFieldProps {
  options?: T[];
  idProp?: string;
  titleProp?: string;
  name?: string;
  displayEmpty?: boolean;
  loading?: boolean;
  emptyText?: string;
  helperText?: string;
  renderValue?: (value: T) => React.ReactNode;
  renderMenuItem?: (value: T) => React.ReactElement;
  onChange?: StandardTextFieldProps["onChange"];
}

//Component
export const SelectField = <T extends object>(props: SelectFieldProps<T>) => {
  const {
    idProp = "id",
    titleProp = "title",
    options: optionsProp,
    placeholder: placeholderProp = "",
    SelectProps,
    displayEmpty,
    emptyText = "None",
    disabled: disabledProp,
    helperText,
    renderValue: renderValueProp,
    renderMenuItem: renderMenuItemProp,
    ...other
  } = props;

  // Render

  const DropdownIconElement = ExpandMoreRoundedIcon;
  const shouldDisableSelect = disabledProp;

  const renderValue = useCallback(
    (value: unknown) => {
      const placeholderElement = placeholderProp ? <SelectPlaceholder>{placeholderProp}</SelectPlaceholder> : "";

      if (!value || !optionsProp) {
        return placeholderElement;
      }

      const foundValue = optionsProp.find((item) => {
        const itemValue = _get(item, idProp);

        if (itemValue) {
          return String(itemValue) === String(value);
        }

        return placeholderElement;
      });

      if (foundValue) {
        if (renderValueProp) {
          return renderValueProp(foundValue);
        }

        return _get(foundValue, titleProp) as string;
      }

      return placeholderElement;
    },
    [idProp, titleProp, placeholderProp, optionsProp, renderValueProp]
  );

  const options = useMemo(() => {
    if (!optionsProp) {
      return null;
    }

    return optionsProp.map((option, index) => {
      if (renderMenuItemProp) {
        return renderMenuItemProp(option);
      }

      const id = _get(option, idProp) || index;
      const title = _get(option, titleProp) || "";

      return (
        <MenuItem key={id} value={id}>
          <Typography variant="inherit" noWrap>
            {title}
          </Typography>
        </MenuItem>
      );
    });
  }, [optionsProp, idProp, titleProp, renderMenuItemProp]);

  return (
    <TextField
      select
      {...other}
      SelectProps={{
        ...SelectProps,
        renderValue,
        IconComponent: DropdownIconElement,
      }}
      disabled={shouldDisableSelect}
    >
      {displayEmpty && (
        <MenuItem value="">
          <Typography component="em" variant="subtitle1">
            {emptyText}
          </Typography>
        </MenuItem>
      )}
      {options}
    </TextField>
  );
};
