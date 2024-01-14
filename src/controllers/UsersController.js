const getAllUsers = (req, res) => {
    const data = [
        {
            "id_user": "1",
            "first_name": "Primantoro",
            "midlle_name": "Dwi",
            "Last_name": "Yogo",
            "email": "primantoroo@outlook.com",
            "password": "dwi123"
        },
        {
            "id_user": "2",
            "first_name": "Ulfa",
            "midlle_name": "Nur",
            "Last_name": "Fitriyanti",
            "email": "ulfa@outlook.com",
            "password": "ulfa123"
        },
    ]
    res.json({
        message: 'GET all users berhasil',
        data: data
    })
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new users berhasil',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const { idUser } = req.params;
    console.log('idUser : ',idUser);
    res.json({
        message: 'UPDATE user berhasil'
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser
}