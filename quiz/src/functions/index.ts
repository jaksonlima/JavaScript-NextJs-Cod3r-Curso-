export function UUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function randomArray(values: any[]): any[] {
  return values.map(value => ({ value, ramdom: Math.random() }))
    .sort((obj1, obj2) => obj1.ramdom - obj2.ramdom)
    .map(obj => obj.value)
}