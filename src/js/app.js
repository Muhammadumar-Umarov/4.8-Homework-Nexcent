// 1-misol
{
    const createUser = (name, age) => {
        object = {
            name: name,
            age: age
        }
        object.isAdmin = false

        return object
    }

    // console.log(createUser("Ismoil", 32));
}

// 2-misol
{
    let returnSum = function (...numbers) {
        let sum = 0
        numbers.forEach(i => sum += i)
        return sum
    }

    // console.log(returnSum(1,2,3,4,5));
}

// 3-misol
{
    function displayUserInfo(name, age){
        let userInfo = {
            name: name,
            age: age
        }

        
        return {name, age} = userInfo
    }

    // console.log(displayUserInfo("Abdulloh", 20));

    // Savolga yaxshi tushunmadim, to'g'ri ishladimmi yo'qmi bilmayman.
}

// 4-misol
{
    function objectToArray(name, age){
        userInfo = {
            name: name,
            age: age
        }
        return Object.entries(userInfo)
    }

    // console.log(objectToArray("Ali",25));
    
}

// 5-misol
{
    function getKeysAndValues(a,b,c){
        let obj = {
            a: a,
            b: b,
            c: c
        }
        return Object.keys(obj)
    }
    // console.log(getKeysAndValues(1,2,3));
}

// 6-misol
{
    const sumPositiveValues = (a,b,c) => {
        let obj = {
            a: a,
            b: b,
            c: c
        }
        let sum = 0

        Object.values(obj).forEach(i => {
            if(i > 0){
                sum += i
            }
        })

        return sum
    }

    console.log(sumPositiveValues(-5,1,14));
}