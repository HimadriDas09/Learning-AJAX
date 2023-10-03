function getAllCourseData() {
    $('#container').css({
        visibility : 'hidden'
    });

    // method1 > using XMLHttpRequest

    var xhrRequest = new XMLHttpRequest();

    xhrRequest.open('get', 'https://api.codingninjas.in/api/v3/courses', true);

    xhrRequest.send();

    // when API returns the data
    xhrRequest.onload = function() {
        // 1st convert data to JSON

        let JSON_Data = JSON.parse(xhrRequest.response);
        // coursesArray > contains an array of JSON
        let coursesArray = JSON_Data.data.courses;

        let courseParentContainer = document.getElementById("all-courses-container");

        for(let courseInd in coursesArray) {
            let course = coursesArray[courseInd];
            console.log(course);

            let courseCard = document.createElement('div');
            courseCard.classList.add('course-card');

            let courseImage = document.createElement('img');
            $(courseImage).attr('src', course.classroom_icon_url);
            courseCard.appendChild(courseImage);

            let courseName = document.createElement('p');
            $(courseName).attr('id', 'course-name');
            $(courseName).text(course.name);
            courseCard.appendChild(courseName);

            let br = document.createElement('br');
            courseCard.appendChild(br);

            let courseLevel = document.createElement('p');
            $(courseLevel).attr('id', 'course-level');
            $(courseName).text(course.name);
            courseCard.appendChild(courseName);

            courseParentContainer.appendChild(courseCard);
        }

    }

    xhrRequest.onerror = function() {
        console.log('error in fetching data from API');
    }
}


$('#fetch-courses').click(getAllCourseData);