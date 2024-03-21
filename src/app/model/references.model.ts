export interface ReferencesModel {
  id: number,
  personIdentificator: string,
  personNames: string,
  firstName: string,
  lastName: string,
  roleName: string,
  ambSheetNo: string,
  healthInsBookletNo: string,
  alergy: string,
  pastDiseases: string,
  visitDate: string,
  outpationListNo: string,
  dentistId: number
}

export interface ReferencesForm {
  startDate: string,
  endDate: string
}
