function queueForShower(students, timetable) {
    //tao mot bien cong don thoi gian tam
    let sum = 0;
    for (let j = 0; j < timetable.length; j++) {
        //loop qua students de kiem tra xem hoc sinh nao co the tam truoc khi mat nuoc lan dau tien
        for (let i = 0; i < students.length; i++) {
            // console.log(students[i]);
            // neu thoi gian tam nho hon thoi gian mat nuoc thi cong don vao sum va xoa phan tu khoi mang
            if (students[i] + sum <= timetable[j][0]) {
                sum += students[i];
                students.splice(i, 1);
                i=-1;
            }
        }
        if(students.length == 0) {
            return sum;
        }
        //doi qua thoi gian mat nuoc thi tong cong don se la thoi gian sau khi mat nuoc
        sum = timetable[j][1];
    }

    //cho cac hoc sinh con lai di tam not
    sum += students.reduce(function (a, b) {
        return a + b;
    })
    return sum;
}
