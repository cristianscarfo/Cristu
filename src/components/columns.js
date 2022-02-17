export const COLUMNS = [
  {
    Header: "Id",
    accessor: "brandId",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Active",
    accessor: "active",
    Cell: ({ value }) => {
      return value ? "True" : "False";
    },
  },
];
