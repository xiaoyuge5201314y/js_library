const {deepClone} =require( '../dist/js_library.cjs')

const data = {
    a:1,
    b:{
        name:123213
    }
}

const res = deepClone(data)
res.b.name=2
console.log(data,res)