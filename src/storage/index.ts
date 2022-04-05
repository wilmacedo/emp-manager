import path from "path";
import fs from "fs";
import { IEmployee } from "../types";
import { decode } from "punycode";

export enum DatabaseType {
  Emplyoee = "employee",
  Journay = "journay",
}

class Storage {
  private dbType: DatabaseType;

  constructor(dbType: DatabaseType) {
    this.dbType = dbType;
  }

  getPath(): string {
    const dbName = `${this.dbType}.storage`;
    const dbPath = path.join(__dirname, "tmp", dbName);

    return dbPath;
  }

  getData(): string {
    let file = "";

    if (fs.existsSync(this.getPath())) {
      file = fs.readFileSync(this.getPath(), "utf-8");
    } else {
      const emptyData = JSON.stringify([]);
      file = emptyData;

      fs.writeFileSync(this.getPath(), emptyData);
    }

    return file;
  }

  addData = (data: IEmployee) => {
    const dbData = this.getData();
    const decodedData = JSON.parse(dbData);

    decodedData.push(data);

    fs.writeFileSync(this.getPath(), JSON.stringify(decodedData));
  };

  setData = (data: any) => {
    fs.writeFileSync(this.getPath(), JSON.stringify(data));
  };
}

export default Storage;
