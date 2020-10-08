const timeStampOption = {
    timestamps: { 
        currentTime: () => Math.floor(Date.now() / 1000) 
    }
  }
module.exports = timeStampOption