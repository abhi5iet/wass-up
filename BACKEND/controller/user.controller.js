import User from '../model/user.model.js';

export const addUser = async (req, res) => {
    try{
        let myUser = await User.findOne({googleId : req.body.googleId}).lean().exec();
        if(myUser){
            return res.status(202).json({message : 'User Already Exist'});
        }
    }catch (err){
        return res.status(500).json({message : 'Problem fetching user'});
    }
    try{
        const newUser = await User.create(req.body);
        return res.status(201).json({data: newUser});
    } catch(err){
        return res.status(500).json({message : 'Errror While Adding User'});
    }
}

export const delUser = async(req, res) => {
    const id = req.params.id;
    const item = await User.findByIdAndDelete(id).lean().exec();
    return res.status(201).json({message: 'Successfully Deleted', data : item});
}

export const getUsers = async(req, res) => {
    try{
        const allUsers = await User.find({}).lean().exec();
        return res.status(200).json({data : allUsers});
    } catch(err) {
        res.status(500).json(err);
    }
}