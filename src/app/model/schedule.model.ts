import {DentistModel} from "./dentist.model";
import {PatientModel} from "./patient.model";

export interface ScheduleModel {
  id: number,
  visitDate: Date,
  dentist: DentistModel,
  patient:PatientModel
}
