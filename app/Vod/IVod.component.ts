import {Component, OnInit, OnDestroy} from '@angular/core';

 export interface IVod extends OnInit, OnDestroy{
    editAnotherField: boolean;
    curentEditBtn: number;
    ngOnInit();
    ngOnDestroy();
    onBtnEdit(data: any);
    onInputChange(data: any);
    onBtnConfirmEdit(data: any);
    onBtnHide(data: any);
    onTouched(data: any) ;
 }
 
   