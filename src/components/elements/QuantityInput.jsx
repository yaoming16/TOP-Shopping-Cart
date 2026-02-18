function QuantityInput({ value, onChange, min = 1, className = "" }) {

  function validateNewValue(newValue) {
    if (isNaN(newValue) || newValue <= min) {
      return min;
    }
    return newValue;
  }

  return (
    <input 
      className={className}
      type="number" 
      min={min} 
      value={value} 
      onChange={(e) => onChange(validateNewValue(parseInt(e.target.value)))}
    />
  );
}

export default QuantityInput;