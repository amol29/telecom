import React from "react";
import Select from "react-select";

export default React.forwardRef(({defaultValue=[], isMulti = false, options = [], ...rest}, ref) => (
  <Select
    ref={ref}
    closeMenuOnSelect={false}
    defaultValue={defaultValue}
    isMulti={isMulti}
    options={options}
    {...rest}
  />
));