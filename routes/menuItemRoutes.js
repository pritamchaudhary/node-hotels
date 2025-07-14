const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/', async(req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:taste', async(req, res) => {
    try {
        const tasteType = req.params.taste;
        if(tasteType == 'Sweet' || tasteType == 'Spicy' || tasteType == 'Sour'){
            const response = await MenuItem.find({taste: tasteType});
            console.log('menu fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid taste type'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const menuItemUpdatedData = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuItemId, menuItemUpdatedData, {
            new: true,
            runValidators: true 
        });
        if(!response){
            return res.status(404).json({error: 'MenuItem not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.delete('/:id', async(req, res) => {
    const menuItemId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuItemId);

    if(!response){
        return res.status(404).json({error: 'MenuItem not found'});
    }
    console.log('data deleted');
    res.status(200).json({message: 'MenuItem deleted successfully'});
})

module.exports = router;
