import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SD_PerPage } from "../../common/SD";
import RNPickerSelect from "react-native-picker-select";
import { COLORS, SIZES } from "../../common";
import { DataTable } from "react-native-paper";

const SortTypes = [
  { label: SD_PerPage.PERPAGE0, value: SD_PerPage.PERPAGE0 },
  { label: SD_PerPage.PERPAGE1, value: SD_PerPage.PERPAGE1 },
  { label: SD_PerPage.PERPAGE2, value: SD_PerPage.PERPAGE2 },
  { label: SD_PerPage.PERPAGE3, value: SD_PerPage.PERPAGE3 },
  { label: SD_PerPage.PERPAGE4, value: SD_PerPage.PERPAGE4 },
];

const items = [...Array(31)].map((_, i) => i);
const TotalRecords = items.length;

export default function MenuPagination() {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(
    parseInt(SD_PerPage.PERPAGE1)
  );

  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [numberOfItemsPerPage]);

  const handleChange = (text: number) => {
    onItemsPerPageChange(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <RNPickerSelect
          style={{
            inputAndroid: styles.inputAndroid,
            viewContainer: styles.pickerContainer,
          }}
          onValueChange={(value) => handleChange(value)}
          items={SortTypes}
          placeholder={{ label: "Rows Per Page...", value: null }}
        />
      </View>
      <View style={styles.tableContainer}>
        <DataTable>
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(TotalRecords / numberOfItemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${TotalRecords}`}
            showFastPaginationControls
            numberOfItemsPerPage={numberOfItemsPerPage}
          />
        </DataTable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: SIZES.small / 2,
    alignContent: "center",
    backgroundColor: COLORS.deActive,
    borderRadius: 3,
    marginBottom: 5,
    height: 60,
  },
  inputAndroid: {
    color: COLORS.primary,
    marginHorizontal: -10,
    marginVertical: -5,
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary2,
    borderRadius: 20,
    marginBottom: 12,
  },
  selectContainer: {
    height: 55,
    flex: 0.3,
    margin: SIZES.xSmall,
  },
  tableContainer: {
    flex: 0.7,
    marginTop: 3,
  },
});
