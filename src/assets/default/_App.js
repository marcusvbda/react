module.exports = {
    set(object)
    {
      this.setState(object)
    },
    get(index)
    {
      return this.state[index];
    },
    ajax(_method,_route,_data,callback_sucess=null,callback_error=null)
    {
        fetch(_route, {
            method: _method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_data)
            }).then(res => res.json()).then((result) => {
                if(typeof callback_sucess == "function")
                {
                    callback_sucess(result);
                }
            },
            (error) => {
                if(typeof callback_error == "function")
                {
                    callback_error(error);
                }
            }
        );
    }
} 





    