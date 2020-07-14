// .babelrc or babel-loader option
module.exports = {
    "plugins": [
        [
            "import", {
                "libraryName": "@doctorwork/one",
                customName(name) {
                    return '@doctorwork/one/lib/' + name
                },
                style: false
                // "style": (name) => {
                //   return `${name}/style/index.less`;
                // }
            },
            '@doctorwork/one'
        ] // `style: true` 会加载 less 文件
    ]
}
