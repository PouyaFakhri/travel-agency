const uuidToOrderNumber = (uuid) => {
  const cleanUuid = uuid.replace(/-/g, "");

  const num = parseInt(cleanUuid.substring(0, 12), 16);

  const orderNumber = (num % 100000000).toString().padStart(8, "0");

  return orderNumber;
};

export default uuidToOrderNumber
