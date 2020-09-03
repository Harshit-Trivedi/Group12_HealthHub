# Add firebase config key and google maps API key in the environment variables files to fix build issues

# Group 12 - Project Proposal

Health Hub allows users to book in-clinic appointments with doctors, purchase medicine, book health plans, have intercation in forum and view blogs where the questions are answered by medical professionals.

-   _Date Created_: 07 Jun 2020
-   _Last Modification Date_: 24 Jun 2020

## Authors

-   [Avinash Gazula](av530575@dal.ca)
-   [Harshit Trivedi](harshit.trivedi@dal.ca)
-   [Sai Sunil Menta](ss734478@dal.ca)
-   [Vidip Malhotra](vidip.malhotra@dal.ca)
-   [Rudra Makwana](Rudra.Makwana@dal.ca)
-   [Swarali Ghalwadkar](swaralisg22@gmail.com)

## Getting Started

## Testing Details

### Prerequisites

NodeJs and Angular must be installed on the system

### Installing

-   Clone the repository by using the provided GitLab link
-   Open the terminal and go to the directory where package.json is located
-   Install the node modules using the following command
    `npm install` or `npm i`
-   Start the angular application by using the following command
    `ng serve`

### Built With

-   [Angular](https://angular.io/) - The web framework used
-   [npm](https://www.npmjs.com/) - Dependency Management
-   [Bootstrap](https://getbootstrap.com/) - Used for styling
-   [Angular Material](https://material.angular.io/) - Material UI componengts for angular

### Design Justifications

-   Angular was the preffered framework for the development of the website because of the straight forward 2-way binding and routing it provides. TyeScript is more robust.
-   Material UI was used for the components because it offers a streamlined and minimalistic layout. Material UI is widely used also its familiar to the end users.
-   Bootstrap was used because its easy to set up and configure laypouts.
-   A dark blue colour (#001F3F) was chosen as the primary color because it constrasts well with the white background.
-   Roboto font was used for the components because it is the recommended font for Material UI

### Pages Built

-   Login - Can be accessed using the icon on the header
-   Signup - Can be accessed using the icon on the header
-   Home Page - https://health-hub-5709-test.herokuapp.com/
-   About Us - https://health-hub-5709-test.herokuapp.com/aboutUs
-   Contact Us - https://health-hub-5709-test.herokuapp.com/contactUs
-   Consult Doctor - https://health-hub-5709-test.herokuapp.com/consult
-   Doctor's Profile - https://health-hub-5709-test.herokuapp.com/doctor
-   Home Care - https://health-hub-5709-test.herokuapp.com/homeCare
-   Medicine Delivery - https://health-hub-5709-test.herokuapp.com/orderMedicine
-   Schedule Care - https://health-hub-5709-test.herokuapp.com/homeCare
-   Insurance - https://health-hub-5709-test.herokuapp.com/insurance
-   Forum - https://health-hub-5709-test.herokuapp.com/forum
-   Forum Question Answer Page - https://health-hub-5709-test.herokuapp.com/question/1
-   Edit Profile Page - https://health-hub-5709-test.herokuapp.com/edit-profile

### Directory Structure

`src` - source folder contains all of our code

`app/components` - Components directory has directories of all the components

`components/doctor` - This folder contains all the files related for the doctor page

`components/doctor-profile` - This folder contains files related to the doctor's profile page

`components/header` - This folder contains files related to the toolbar of the application

`components/home` - This folder contains files related to home screen after logging in feature

`components/login` - This folder contains files related to the login page

`components/register` - This folder contains files related to the registration page

`components/about-us` - This folder container files related to about us page

`components/contact-us` - This folder container files related to contact us page

`components/home-care` - This folder container files related to home care informational page

`components/schedule-care` - This folder container files related to book home care page

`components/medicine-delivery` - This folder container files related to medicine delivery page

`components/medicine-delivery/my-orders` - This folder contains files related to orders placed by registered user along with order deletion

`components/insurancefinder` - This folder container files related to insurance finder and comparision

`components/forum` - This folder container files related to forum

`components/insuranceitem` - This folder container files related to each insurance recommendation

`components/questionitem` - This folder container files related to each question

`components/edit-profile` - This folder contains files related to edit-profile

`helpers` - This folder contains all the helper methods

## Deployment

App is deployed on heroku by linking github repository. Automatic deploy is enabled so that it builds as soon as a commit has been made.

### Heroku URL

https://health-hub-a2.herokuapp.com/

### Gitlab Link

https://git.cs.dal.ca/gazula/a2_avinash_gazula

### Github Link

https://github.com/avinashgazula/HealthHub-A2

## Sources Used

[1] "Angular Material. [Online]. Available: https://material.angular.io/. [Accessed: 07- Jun- 2020].

[2] "Beatiful Free Images & Pictures | Unsplash". [Online]. Available: https://unsplash.com/. [Accessed: 09-Jun-2020].

[3] "Material Icons". [Online]. Available: https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/ [Accessed: 09-Jun-2020]

[4] "Lorem Ipsum". [Online]. Available: https://www.lipsum.com/ [Accessed: 13-Jun-2020]

[5] "A complete guide to routing in Angular". [Online]. Available: https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/ [Accessed: 13-Jun-2020]

### /src/app/app-routingmodule.ts

```typescript
{ path: 'doctor', component: DoctorProfileComponent },
{ path: 'consult', component: DoctorComponent },
{ path: '', pathMatch: 'full', component: HomeComponent }
```

-   [How] The code in [5](https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/) was implemented by Ahmed Bouchefra
-   [Why][5](https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/ ) Code was used to route to components
-   [How][5](https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/ ) Code was modified by Avinash Gazula

[6] "Angular Flex Layout". [Online]. Available: https://github.com/angular/flex-layout [Accessed: 12-Jun-2020]

[7] "Styling Scrollbars with CSS: The Modern Way to Style Scrollbars". [Online]. Available: https://alligator.io/css/css-scrollbars/ [Accessed: 13-Jun-2020]

### /src/app/components/doctor/doctor.component.css

### /src/app/components/doctor-profile/doctor-profile.component.css

### /src/app/components/home/home.component.css

```css
*::-webkit-scrollbar {
    width: 12px;
}
*::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 20px;
}
*::-webkit-scrollbar-thumb {
    background-color: #001f3f;
    border-radius: 20px;
    border: 3px solid #f5f5f5;
}
```

-   [How] The code in [7](https://alligator.io/css/css-scrollbars/) was implemented by William Le
-   [Why][7](https://alligator.io/css/css-scrollbars/) Code was used to create a custom scroll bar
-   [How][7](https://alligator.io/css/css-scrollbars/) Code was modified by Avinash Gazula

[8] "Angular 7 - Reactive Forms Validation". [Online]. Available: https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example [Accessed: 15-Jun-2020]

### /src/app/helpers/MatchPasswords.ts

```javascript
export function MatchPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
        const control1 = formGroup.controls[password];
        const control2 = formGroup.controls[confirmPassword];

        if (control2.errors && !control2.errors.mustMatch) {
            return;
        }

        if (control1.value !== control2.value) {
            control2.setErrors({ match: true });
        } else {
            control2.setErrors(null);
        }
    };
}
```

-   [How] The code in [8](https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example) was implemented by Jason Watmore
-   [Why][8](https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example) Code was used to create a custom validator to match passwords
-   [How][8](https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example) Code was modified by Avinash Gazula

[9] "How to Deploy Angular Application to Heroku". [Online]. Available: https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147 [Accessed: 14-Jun-2020]

[10] "Pharmacy Finder | Pharmacy Association of Nova Scotia", Pans.ns.ca, 2020. [Online]. Available: https://pans.ns.ca/public/you-your-pharmacist/pharmacy-finder. [Accessed: 20- Jul- 2020].

[11] H. JavaScript?, Д. Васильев, D. Pavlutin, A. P and P. Maniar, "How to convert file to base64 in JavaScript?", Stack Overflow, 2020. [Online]. Available: https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript. [Accessed: 21- Jul- 2020].

### /src/app/components/medicine-delivery/medicine-delivery.component.ts

```javascript
onFileChange(event) {
    var files1 = event.target.files;
    var file1 = files1[0];
    if (files1 && file1) {
      var reader1 = new FileReader();
      reader1.onload = this._handleReaderLoaded.bind(this);
      reader1.readAsBinaryString(file1);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.formPersonalRecord.value["prescriptionFile"] = btoa(binaryString);
  }
```

[12] AMagyar, “Detect click outside Angular component,” Stack Overflow, 01-Apr-1966. [Online]. Available: https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component. [Accessed: 07-Aug-2020].

### /src/app/components/insurancefinder/insurancefinder.ts

Lines: 63-71

```@HostListener('document:click', ['$event'])
 clicked_event(event) {
   if(this.eRef.nativeElement.contains(event.target)) {
   } else {
     setTimeout(() => {
      this.checklogin();
    }, 500);
   }
 }
```

The above code was created by adapting to code(https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component) as shown below code:

```@HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.text = "clicked inside";
    } else {
      this.text = "clicked outside";
    }
  }
```

-[How]Above code in [12] was implemented by AMagyar(https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component) -[Why]Code in [12] was modified to detect changes of click outside the component and run function accordingly. Hostlistener and nativeElement target click was implemented using above code [12]. -[How][12](https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component)Code was modified by Vidip Malhotra

## Image Sources

[1] "Doctor". [Image]. Available: https://unsplash.com/photos/DPEPYPBZpB8 [Accessed: 12-Jun-2020]

[2] "Doctor". [Image]. Available: https://unsplash.com/photos/FVh_yqLR9eA [Accessed: 12-Jun-2020]

[3] "Doctor". [Image]. Available: https://unsplash.com/photos/7bMdiIqz_J4 [Accessed: 12-Jun-2020]

[4] "Doctor". [Image]. Available: https://unsplash.com/photos/7bMdiIqz_J4 [Accessed: 12-Jun-2020]

[5] "Doctor". [Image]. Available: https://unsplash.com/photos/1RskUx-C0A8 [Accessed: 12-Jun-2020]

[6] "Doctor". [Image]. Available: https://unsplash.com/photos/wzV17t-k3k0 [Accessed: 12-Jun-2020]

[7] "Home-Care". [Image]. Available: https://lh3.googleusercontent.com/proxy/gPuENzsO8dvZGIkmqAuCf1a04_CU05mj8Wi6Nzu07qoDpikHi3iq8DgTHWzPjndJXtDHM4ahT4zfu5UyEEFfFPPck0owZHfS7aL5ZHd02ljCwUU_v-Eb0SN-2g [Accessed: 22-Jun-2020]

[8] "Order-Medicine" [Image]. Available: https://d.newsweek.com/en/full/1541364/prescription-pills.jpg [Accessed: 22-Jun-2020]

[9] "Contact-Us" [Image]. Available: https://i.gifer.com/YXIc.gif [Accessed: 22-Jun-2020]

[10] usericon.png (“User-Icon,” Emmegi Heat Exchangers UK. [Online]. Available: http://www.emmegi.co.uk/contact-emmegi-for-air-blast-oil-coolers/user-icon/. [Accessed: 15-Jun-2020].)

[11] login.jpg (Veernavya, “Flat Doctor Healthcare Character,” Vecteezy, 24-May-2019. [Online]. Available: https://www.vecteezy.com/vector-art/541891-flat-doctor-healthcare-character. [Accessed: 15-Jun-2020].)

[12] greenicon.png (S. Network, “Green ok icon - Free green check mark icons,” IconsDB. [Online]. Available: https://www.iconsdb.com/green-icons/ok-icon.html. [Accessed: 15-Jun-2020].)

[13] healthrecords.png (“Electronic Health Records,” MeHI. [Online]. Available: https://mehi.masstech.org/ehealth/electronic-health-records. [Accessed: 15-Jun-2020].)
[14] insurance.jpg (“Medical Insurance Icon with Shadow. Flat Design. Isolated Illustration.,” 123RF. [Online]. Available: https://www.123rf.com/photo_48456177_stock-vector-medical-insurance-icon-with-shadow-flat-design-isolated-illustration-.html. [Accessed: 15-Jun-2020].)

[15] digestive.png (VectorGrove.com, “Stomach icon, flat style. Internal organs of the human design element, logo. Anatomy, medicine concept. Digestion. Digestive tract, system.
Healthcare. Isolated on white background. Vector illustr. by Borokh,” VectorGrove. [Online]. Available: https://www.vectorgrove.com/royalty-free-vector-image/25762996/stomach-icon-flat-style-internal-organs-of-the-human-design-element-logo-anatomy-medicine-concept-digestion-digestive-tract-system-healthcare-isolated-on-white-background-vector-illustr.html. [Accessed: 15-Jun-2020].)

[16] heart.png (C. Fernando, “'Medical Icons Set (Simple)' by Carlos Fernando,” Iconfinder. [Online]. Available: https://www.iconfinder.com/icons/1542716/clinic_doctor_heart_hospital_pulsation_pulse_rate_icon. [Accessed: 15-Jun-2020].)

[17] teeth.png (Prettycons, “'Prettycons - Dentistry Vol.1 - Flat' by Prettycons,” Iconfinder. [Online]. Available: https://www.iconfinder.com/icons/4429971/change_dentist_doctor_hospital_teeth_tooth_icon. [Accessed: 15-Jun-2020].)

[18] ortho.png (https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.enpcn.com%2Forthotriage%2Forthopedic-triage%2F&psig=AOvVaw3PQfsIJpfVThZ-08JsVmlt&ust=1592336780880000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCM0fPKhOoCFQAAAAAdAAAAABAD)

[19] healthcare.jpg (“Medical information and health advice you can trust.,” Healthline. [Online]. Available: https://www.healthline.com/. [Accessed: 15-Jun-2020].)

[20] user.png (“User Icon Svg,” OnlineWebFonts.COM. [Online]. Available: https://www.onlinewebfonts.com/icon/184513. [Accessed: 15-Jun-2020].)

[21] emptyCart.jpg. Vinsolutions.com, 2020. [Online]. Available: https://www.vinsolutions.com/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg?ext=.jpg. [Accessed: 23- Jul- 2020].

[22] usericon2.png “Redirect Notice,” Google. [Online]. Available: https://www.google.com/url?sa=i. [Accessed: 04-Aug-2020].
Icons References:
[1] “Icons Reference,” Icons from Font Awesome, Bootstrap and Google. [Online]. Available: https://www.w3schools.com/icons/icons_reference.asp. [Accessed: 15-Jun-2020].

[2] "Cart Icon," Cdn4.iconfinder.com, 2020. [Online]. Available: https://cdn4.iconfinder.com/data/icons/medical-set-glyph-silhouettes/300/142732197Untitled-31-512.png. [Accessed: 23- Jul- 2020].

Insurance Data Text References:

[1][online]. Available: https://www.surehealth.ca/?gclid=Cj0KCQjw6575BRCQARIsAMp-ksNUyvYowKuJ4GubKISGLFuqX9itKyTK9KjZ5YhYxp4YwpGBgzh-Og0aAjirEALw_wcB. [Accessed: 04-Aug-2020].

[2] “Personal health insurance,” Personal Health Insurance | Sun Life. [Online]. Available: https://www.sunlife.ca/en/explore-products/insurance/health-insurance/personal-health-insurance/. [Accessed: 04-Aug-2020].

[3] “Personal Health &amp; Dental Insurance: Great-West Life in Canada,” Great. [Online]. Available: https://www.greatwestlife.com/you-and-your-family/products/protection-for-your-life/health-and-dental-insurance.html. [Accessed: 04-Aug-2020].

## Acknowledgements

-   https://www.traversymedia.com/
