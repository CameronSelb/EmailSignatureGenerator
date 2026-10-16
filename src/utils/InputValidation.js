export function validateInput(signature) {
  const errors = {};

  if (!signature.first_name?.trim()) {
    errors.first_name = "First name is required";
  } else if (!/^[A-Za-z]*$/.test(signature.first_name.trim())) {
    errors.first_name = "Please enter a valid first name"
  }

  if (!signature.last_name?.trim()) {
    errors.last_name = "Last name is required";
  } else if (!/^[A-Za-z]*$/.test(signature.last_name.trim())) {
    errors.last_name = "Please enter a valid first name"
  }

  if (!signature.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signature.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!signature.phone_number?.trim()) {
    errors.phone_number = "Phone number is required";
  } else if (!/^[+]?[\d\s()-]{7,20}$/.test(signature.phone_number)) {
    errors.phone_number = "Please enter a valid phone number";
  } else if (signature.phone_number.slice(0,1) != '0'){
    errors.phone_number = "Needs to start with '0' or international code e.g. '+27'";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors: errors,
  };
}
