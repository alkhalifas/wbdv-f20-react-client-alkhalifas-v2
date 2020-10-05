import {API_URL} from "../constants"; //destructor syntax

// export const findAllCourses = () =>
//     fetch(API_URL)
//         .then(response => response.json())

//Explicit return using different syntax, easier to read
export const findAllCourses = async () => {
    const response = await fetch(API_URL);
    return await response.json()
};

// export const deleteCourse = (courseId) =>
//     fetch(`${API_URL}/${courseId}`, {method: 'DELETE'})
//         .then(response => response.json());

//Explicit return using different syntax, easier to read
export const deleteCourse = async (courseId) =>{
    const response = await fetch(`${API_URL}/${courseId}`,
                         {method: 'DELETE'})
        return await response.json();
}

export const createCourse = (course) =>
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

