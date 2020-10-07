import {API_URL_COURSES} from "../constants"; //destructor syntax

// export const findAllCourses = () =>
//     fetch(API_URL_COURSES)
//         .then(response => response.json())

//Explicit return using different syntax, easier to read
export const findAllCourses = async () => {
    const response = await fetch(API_URL_COURSES);
    return await response.json()
};

// export const deleteCourse = (courseId) =>
//     fetch(`${API_URL_COURSES}/${courseId}`, {method: 'DELETE'})
//         .then(response => response.json());

//Explicit return using different syntax, easier to read
export const deleteCourse = async (courseId) =>{
    const response = await fetch(`${API_URL_COURSES}/${courseId}`,
                         {method: 'DELETE'})
        return await response.json();
};

export const createCourse = (course) =>
    fetch(API_URL_COURSES, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${API_URL_COURSES}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findCourseById = async (courseId) => {
    const response = await fetch(`${API_URL_COURSES}/${courseId}`)
    return await response.json();
};


