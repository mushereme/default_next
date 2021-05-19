export default (req, res) => {
  const googleSheetContents = { thisIsTest: "dfsdfsdfds" };

  res.status(200).json(googleSheetContents);
};
