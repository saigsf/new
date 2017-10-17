import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { FormText } from '../../models/FormText';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    private oForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }
    // 创建表单元素
    createForm() {
        this.oForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
            email: ['', [Validators.required]],
            
                password: [''],
                rePassword: ['']
            
        });
    }
    // 提交表单函数
    postDate() {
        /**
         * valid:是否有效
         * invalid:无效
         * dirty:脏
         * status:状态
         * errors:显示错误
         */
        if(this.oForm.valid){
            console.log(this.oForm.value);
        }
    }

    
    
}
