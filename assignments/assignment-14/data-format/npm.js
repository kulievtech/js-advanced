const fs = require("fs");

class Data {
    read(urlFile) {
        return fs.readFileSync(urlFile, "utf-8");
    }

    parse(content) {
        return content.split("\n");
    }

    parseRow(row) {
        return row.split(",");
    }

    format(urlFile) {
        const content = this.read(urlFile);
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
        // const profCount = {};

        // for (let i = 0; i < newDataFormat.length; i++) {
        //     const profession = newDataFormat[i].Profession;
        //     if (profCount[profession]) {
        //         profCount[profession] += 1;
        //     } else {
        //         profCount[profession] = 1;
        //     }
        // }
        // return profCount;

        const professionCount = newDataFormat.reduce((acc, personObj) => {
            const profession = personObj.Profession;

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

const newDataFormat = data.format("data.csv");
console.log(newDataFormat);

const professionCount = data.countByProfession("data.csv");

console.log(professionCount);

const ageRangeCount = data.countByAgeRange("data.csv");

console.log(ageRangeCount);
