module.exports={
    entry:['./src/app.js','./src/app1.js'],
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.js/,exclude:/node_modules/,use:{
            loader: 'babel-loader',
            options: {
             "presets": ["react","env","es2015","stage-0"]
            }
          }}
        ]
    }
}