import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SkillService } from '../skill.service';
import { UserService } from '../../../Services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.css']
})
export class MySkillComponent implements OnInit {

  SkillsFormGroup: FormGroup;
  EmployeeSkills: any[];
  SkillsList: any[];

  constructor(
    private fb: FormBuilder,
    private skillService: SkillService,
    private userService: UserService,
    private messageService: MessageService
  ) { }
  ngOnInit(): void {
    this.skillService.GetAllTheSkills()
      .subscribe(res => {
        this.SkillsList = res.dataObj;
        this.skillService.GetSkillsMappedToEmployee(this.userService.LoggedInUser.Id)
          .subscribe(res => {
            if (res.errorCode == 0) {
              console.log(res.dataObj);
              this.EmployeeSkills = res.dataObj;
              this.AddRequiredSkills();
            }
            else {

            }
          });
      }
        , err => {

        });
  }

  AddRequiredSkills() {
    console.log("test");
    this.SkillsFormGroup = this.fb.group({
      SkillsArray: this.RequiredSkills
    });
  }

  get RequiredSkills() {
    var skillsFormArray = this.fb.array([]);
    var count = 0;
    console.log(this.EmployeeSkills);
    count = this.EmployeeSkills.length;
    console.log(count);
    this.EmployeeSkills.forEach(skill => {
      console.log(skill);
      skillsFormArray.push(this.fb.group({
        skillName: [this.GetSkillName(skill.skillId)],
        skillId: [skill.skillId],
        skillProficiency: [skill.skillProficiency],
        skillMpgId: [skill.skillMpgId],
        mode: ["view"]
      }))
    });
    for (let index = count; index < 3; index++) {
      skillsFormArray.push(this.fb.group({
        skillName: ['', Validators.required],
        skillProficiency: [0],
        mode: ["edit"],
        skillMpgId: [''],
        skillId: [0]
      }));
    }
    return skillsFormArray;
  }


  GetSkillName = function (id) {
    for (let index = 0; index < this.SkillsList.length; index++) {
      const skill = this.SkillsList[index];
      if (skill.skillId == id) {
        return skill.skillName;
      }
    }
  }

  GetSkillFormGroup = function (index) {
    return this.skillArray.controls[index] as FormGroup;
  }

  get skillArray() {
    return this.SkillsFormGroup.get("SkillsArray") as FormArray;
  }

  AddNewSkillFormGroup() {
    this.skillArray.push(this.fb.group({
      skillName: ['', Validators.required],
      skillProficiency: [0],
      mode: ["edit"],
      skillMpgId: [''],
      skillId: [0]
    }));
  }

  EditIconClicked(skillForm: FormGroup) {
    skillForm.patchValue({
      mode: "edit"
    })
  }

  DeleteIconClicked(skill, index) {
    if (skill.skillId == 0) {
      this.skillArray.removeAt(index);
      return;
    }

    this.UnMapSkillForEmployee(skill,index);
  }

  SaveIconClicked(index) {
    var skillForm = this.skillArray.controls[index] as FormGroup;

    this.CreateSkillAndMap(index);

  }

  CancelIconClicked(data) {

  }

  ChangeMode(state) {

  }


  CheckIfSkillExists(skillName) {
    this.SkillsList.forEach((skill) => {
      if (skill == skillName) {
        return true;
      }
    })
    return false;
  }

  CreateSkillAndMap(index) {

    var skillForm = this.skillArray.controls[index] as FormGroup;

    var data = skillForm.value;

    if (data.skillId == 0) {
      if (this.CheckIfSkillExists(data.skillName)) {
        this.MapSkill(data, skillForm);
      }
      else {
        this.skillService.CreateSkill(data.skillName).subscribe((res) => {
          if (res.errorCode == 0) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully Created skill' });
            this.SkillsList.push(res.dataObj);
            data.skillId = res.dataObj.skillId;
            this.MapSkill(data, skillForm);
          }
          else {
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });

          }
        }, (err) => {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Failed in api" });
        });
      }
    }
    else{
      this.skillService.UpdateSkill(data.skillId,data.skillName).subscribe((res) => {
        this.MapSkill(data, skillForm);
        if (res.errorCode == 0) {
          for (let index = 0; index < this.SkillsList.length; index++) {
            const element = this.SkillsList[index];
           
            if (element.skillId == res.dataObj.skillId) {
              this.SkillsList[index] = res.dataObj;
            }
          }
          this.messageService.add({ severity: 'success', summary: 'Skill updated', detail: 'Skill updated successfully' });
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
        }
      }, (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
      });
    }
   
  }


  MapSkill = function (data, skillForm) {
    var content = {
      skillId: data.skillId,
      skillProficiency: data.skillProficiency,
      employeeId: this.userService.LoggedInUser.Id,
      activateFlag: 1,
      skillMpgId:data.skillMpgId
    }

    console.log("Map triggered")
    this.skillService.MapEmployeeWithSkill(content).subscribe((res) => {
      if (res.errorCode == 0) {
        skillForm.patchValue({
          mode: "view",
          skillProficiency:res.skillProficiency
        });
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully mapped skill' });

      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });

      }
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Failed in api" });

    }
    );
  }

  GetSkillsMappedToEmployee = function () {

  }

  UnMapSkillForEmployee = function (data,index) {
    var content = {
      "skillMpgId": data.skillMpgId,
      "skillId": data.skillId,
      "skillProficiency": data.skillProficiency,
      "employeeId": this.userService.LoggedInUser.Id,
      "activateFlag": 0
    }
    this.skillService.RemoveMappingForSkill(content).subscribe((res) => {

      if (res.errorCode == 0) {
        this.skillArray.removeAt(index);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully removed skill' });

      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });

      }

    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Failed in api" });
    });
  }


}
