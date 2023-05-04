import {NativeDateAdapter} from "@angular/material/core";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1;
  }

  override getDayOfWeekNames(style: "long" | "short" | "narrow"): string[] {
    return ['Нед', 'Пон', 'Вт', 'Сря', 'Четв', 'Пет', 'Съб'];
  }

  override getMonthNames(style: "long" | "short" | "narrow"): string[] {
    return ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
  }

}
