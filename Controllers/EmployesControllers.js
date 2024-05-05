const Employee = require("../Models/Employee");
// Show  the liste of Employees :
const index = (req, res, next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            messgae : "An error has been ocuured !"
        })
    })
}

// Return a signe employee based on hes id :

const show = (req, res, next)=>{
    let EmployeeId = req.body.EmployeeId
    Employee.findById(EmployeeId)
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            messgae : "An error has been ocuured !"
        })
    })
}
// Store a  employee To data base :

const Store = (req, res, next)=>{
    let employee = new Employee({
        name:req.body.name,
        destinition:req.body.name,
        email: req.body.email,
        phonne:req.body.phone
    })
    employee.save()
    .then(()=>{
        res.json({
            messgae:"Employee is saved successfully"
        })
    })
    .catch(error=>{
        res.json({
            messgae : "An error has been ocuured !"
        })
    })
}
// Update a specific employee using  To data base :
const Update = (req,res,nex)=>{
    let EmployeeId = req.body.EmployeeId ;
    let updatedData = {
        name: req.name.data,
        destinition:req.body.name,
        email: req.body.email,
        phonne:req.body.phone
    }
    Employee.findByIdAndUpdate(EmployeeId , {$set,updatedData})
    .then(()=>{
        res.json({
            messgae: "Employee Has Updated Successfully"
        })
    })
    .catch(error=>{
        res.json({
            messgae : "An error has been ocuured !"
        })
    })
}
// Delete based on his id :
const destroy = (req,res,next)=>{
    let EmployeeId = req.body.EmployeeId ;
    Employee.findByIdAndDelete(EmployeeId)
    .then(()=>{
        res.json({
            messgae: "Employee Has deleted Successfully"
        })
    })
    .catch(error=>{
        res.json({
            messgae : "An error has been ocuured !"
        })
})}

module.exports = {index,show,Store,Update ,destroy}


