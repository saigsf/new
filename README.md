###install the Angular CLI globally.
npm install -g @angular/cli
或cnpm install -g @angular/cli

###配置
ng set --global packageManager=cnpm

###Create a new project
ng new my-app

###进入项目文件
cd my-app

###安装依赖包
cnpm install (会报错)
或npm install (最好用这一个)

###Serve the application
ng serve --open


###安装bootstrap tether jquery
cnpm i bootstrap@4.0.0-alpha.6 tether jquery -S

    1.修改bootstrap版本 "bootstrap": "^4.0.0-alpha.6"=>"bootstrap": "4.0.0-alpha.6"

    2.配置第三方
    ```
    在angular-cli.json中
        "styles": [
            "styles.css",
            "../node_modules/_bootstrap@4.0.0-alpha.6@bootstrap/dist/css/bootstrap.css"
        ],
        "scripts": [
            "../node_modules/_jquery@3.2.1@jquery/dist/jquery.js",
            "../node_modules/_tether@1.4.0@tether/dist/js/tether.js",
            "../node_modules/_bootstrap@4.0.0-alpha.6@bootstrap/dist/js/bootstrap.js"
        ],
    ```
    3.在app.component.html写自己的页面测试
    ```
    <div class="container">
        <h1>高世飞</h1>
    </div>
    ```
    4.安装home组件

    ```
    ng g c components/home
    ``

###json-server

    1、全局安装json-server

        cnpm i -g json-server

    2、创建文件夹JSONSERVER在Project里面，和my-app同级

    3、初始化

        cnpm init

        name改为小写

    4、在package.json中
    ```
        "scripts": {
            "json:server": "json-server --watch db.json",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
    ```
    5、创建db.json,并写入内容作为数据

    6、执行jsonserver
    ```
        npm run json:server
    ```

    7、获取数据

        get请求：

        获取所有users数据http://localhost:3000/users/

        获取指定id的users数据http://localhost:3000/users/1

        获取指定id公司的users数据http://localhost:3000/companies/1/users

        通过姓名获取数据http://localhost:3000/companies?name=apple

        分页规定每页的数据条数http://localhost:3000/users?_page=1&_limit=2

        数据排序(升序asc,降序desc)http://localhost:3000/users?_sort=name&_order=asc

        获取年龄范围内的数据http://localhost:3000/users?age_gte=30&age_lte=40

        用户信息http://localhost:3000/users?q=h

        post添加数据

        push跟新数据

        delete删除数据



    8、得到jsonplaceholder的数据
    ```
        "scripts": {
            "json:server": "json-server --watch db.json",
            "json:server:remote": "json-server http://jsonplaceholder.typicode.com/db"
        },
    ```

###创建服务
    ng g service services/user







