const express = require('express');
const shema = require('../schema');


const getdata = async(req, res)=>{
    try {
        const items = await shema.find({});
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const getdatabyid = async(req, res)=>{
    try {
        const { id } = req.params;
        const sh = await shema.findById(id);
        res.status(200).json(sh);
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }

};

const adddata = async(req, res)=>{
    try {
        const sh = await shema.create(req.body);
        res.status(200).json(sh)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }

};

const deletedata = async (req, res)=>{
    try {
        const { id } = req.params;

        const sh = await shema.findByIdAndDelete(id);
        res.status(200).json("ok hata diya!")
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }

};

const updatedata = async(req, res)=>{
    try {

        const {id} = req.params;
        const sh = await shema.findByIdAndUpdate(id, req.body);  //FIXME: here if we print sh then it will not return updated one because here firstly storing object then updating 
        const sh3 = await shema.findById(id) //TODO: that is why i am writing this line.
        res.status(200).json(sh3)

        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }

}

module.exports = {
    getdata,
    getdatabyid,
    adddata,
    deletedata,
    updatedata
}