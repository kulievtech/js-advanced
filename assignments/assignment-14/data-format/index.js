const fs = require("fs");

class Data {
    readAll(fileUrl) {
        return fs.readFileSync(fileUrl, "utf-8");
    }

    parse(content) {
        return content.split("\n");
    }

    parseRow(row) {
        return row.split(",");
    }

    format(urlFile) {
        const content = this.readAll(urlFile);
        const all = this.parse(content);
        const header = this.parseRow(all[0]);
        const rows = all.slice(1);

        const formattedData = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObj = {};

            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];

                personObj[label] = value;
            }
            return personObj;
        });
        return formattedData;
    }

    countByProfession(urlFile) {
        const newDataFormat = this.format(urlFile);

        const professionCount = newDataFormat.reduce((acc, person) => {
            const profession = person.Profession;

            if (acc[profession]) {
                acc[profession]++;
            } else {
                acc[profession] = 1;
            }
            return acc;
        }, {});
        return professionCount;
    }
    countByAgeRange(urlFile) {
        const newDataFormat = this.format(urlFile);

        const ageRangeCount = newDataFormat.reduce(
            (acc, personObj) => {
                const age = personObj.Age;

                if (age >= 10 && age <= 20) {
                    acc["10-20"]++;
                } else if (age >= 21 && age <= 30) {
                    acc["21-30"]++;
                } else if (age >= 31 && age <= 40) {
                    acc["31-40"]++;
                } else if (age >= 41 && age <= 50) {
                    acc["41-50"]++;
                } else if (age >= 51 && age <= 60) {
                    acc["51-60"]++;
                }
                return acc;
            },
            { "10-20": 0, "21-30": 0, "31-40": 0, "41-50": 0, "51-60": 0 }
        );
        return ageRangeCount;
    }
}

const data = new Data();

console.log(data.readAll("data.csv"));
// console.log(data.parse("data.csv"));
// console.log(data.parseRow("data.csv"));
console.log(data.countByAgeRange("data.csv"));
