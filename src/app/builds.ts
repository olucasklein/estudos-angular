export class Builds {
  public id: number;
  public name: string;
  public version: string;
  constructor(id: number, name: string, version: string) {
    this.id = id;
    this.name = name;
    this.version = version;
  }

  getType(build: object) {
    if (this.id > 3) {
      return 'Build Nova';
    } else {
      return 'Build Antiga';
    }
  }
}
