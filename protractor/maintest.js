/**
 * Created by Joshua on 2/18/2015.
 */
describe('After School Add Child, Edit Child,', function() {
    it('Navigate to student Records and click add student', function() {
        browser.get('http://localhost:3000/');
        browser.driver.manage().window().setSize(1280, 1024);
        browser.sleep(1000);

        element(by.name('studentRecordsButton')).click();
        element(by.name('addChildButton')).click();

    });

    it('Add Information to Boxes and Submit', function() {

        element(by.name('firstName')).sendKeys('Protractor');
        element(by.name('lastName')).sendKeys('Test');
        element(by.name('enrolled')).click();
        element(by.name('month')).element(by.cssContainingText('option', 'January')).click();
        element(by.name('day')).element(by.cssContainingText('option', '7')).click();
        element(by.name('year')).element(by.cssContainingText('option', '1988')).click();
        element(by.name('email')).sendKeys('testing@testing.com');
        element(by.name('home')).sendKeys('123-456-7890');
        element(by.name('work')).sendKeys('123-456-7890');
        element(by.name('address')).sendKeys('1234 Cherry Oak Drive, Gainesville Florida');
        element(by.name('schoolName')).sendKeys('Forrest Elementary School');
        element(by.name('grade')).sendKeys('6');
        element(by.name('size')).sendKeys('XXL');

        element(by.model('checkModel.mon')).click();
        element(by.model('checkModel.wed')).click();
        element(by.model('checkModel.fri')).click();

        element(by.name('profileLink')).sendKeys('myLink.com');

        expect(element(by.name('firstName')).getAttribute('value')).toEqual('Protractor');
        expect(element(by.name('lastName')).getAttribute('value')).toEqual('Test');
        expect(element(by.name('enrolled')).getAttribute('value')).toEqual('on');
        expect(element(by.name('month')).getAttribute('value')).toEqual('1');
        expect(element(by.name('day')).getAttribute('value')).toEqual('7');
        expect(element(by.name('year')).getAttribute('value')).toEqual('1988');
        expect(element(by.name('email')).getAttribute('value')).toEqual('testing@testing.com');
        expect(element(by.name('home')).getAttribute('value')).toEqual('123-456-7890');
        expect(element(by.name('work')).getAttribute('value')).toEqual('123-456-7890');
        expect(element(by.name('address')).getAttribute('value')).toEqual('1234 Cherry Oak Drive, Gainesville Florida');
        expect(element(by.name('schoolName')).getAttribute('value')).toEqual('Forrest Elementary School');
        expect(element(by.name('grade')).getAttribute('value')).toEqual('6');
        expect(element(by.name('size')).getAttribute('value')).toEqual('XXL');
        expect(element(by.name('profileLink')).getAttribute('value')).toEqual('myLink.com');

        browser.sleep(1000);
        element(by.name('submit')).click();



    });

    it('Verify All Fields Contain Correct Information', function() {
        expect(element(by.name('fullNameField')).getText()).toEqual('Protractor Test\'s Profile | Age: 27');
        expect(element(by.name('birthDateField')).getText()).toEqual('1/7/1988');
        expect(element(by.name('ageField')).getText()).toEqual('1/7/1988');
    });
/*
    it('Edit Child', function() {
        //open modal
        element(by.name('editChildButton')).click();

        //old values
        expect(element(by.name('firstName')).getAttribute('value')).toEqual('Protractor');
        expect(element(by.name('lastName')).getAttribute('value')).toEqual('Test');
        expect(element(by.name('profileLink')).getText()).toEqual('http://myLink.com');

        //new values
        element(by.name('firstName')).clear();
        element(by.name('lastName')).clear();
        element(by.name('firstName')).sendKeys('Gregory');
        element(by.name('lastName')).sendKeys('House M.D.');

        //exit modal
        element(by.name('confirmButton')).click();

        expect(element(by.name('fullNameField')).getText()).toEqual('Gregory House M.D.\'s Profile');

    });
    it('Open & Close Guardian Modal, Create new Sister', function() {
        browser.sleep(1000);
        element(by.name('guardiansInfoTab')).click();
        // browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
        //     element(by.name('createGuardianButton')).click();
        // });
        element(by.name('name')).sendKeys('Susan Test');

        element(by.name('relationship')).element(by.cssContainingText('option', 'Sister')).click();

        element(by.name('confirmButton')).click();
        //browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');

        browser.sleep(1000);

    });

    it('Open Guardian Modal, Edit Sister to Mom', function() {
        // browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
        //     element(by.name('updateParentButton')).click();
        // });

        element(by.name('guardiansInfoTab')).click();
        element(by.name('slideoutTab')).click();
        browser.sleep(1000);
        element(by.name('editGuardianBtn')).click();
        browser.sleep(1000);

        element(by.model('guardian.gName')).clear();
        element(by.model('guardian.gName')).sendKeys('House\'s Mom');
        element(by.name('updateParentButton')).click();
        browser.sleep(1000);


        element(by.model('guardian.rel')).element(by.cssContainingText('option', 'Mom')).click();

        element(by.name('confirmButton')).click();
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');

        browser.sleep(1000);

    });


    it('Delete Child', function() {
        element(by.name('deleteChildButton')).click();

        //Click the Accept box in the Alert window
        browser.switchTo().alert().accept();
    });*/
});

describe('After School Add Attendance, Edit Attendance,', function() {
    it('Navigate to new attendance page', function() {
        browser.get('http://localhost:3000/#!/attendances/create');
        browser.driver.manage().window().setSize(1280, 1024);
        browser.sleep(1000);
    });

    it('Add Information to Boxes and Submit', function() {

        element(by.name('childID')).sendKeys('5502cb9770feca48148ec769');
        element(by.name('childName')).sendKeys('Morgan Emery');
        element(by.name('month')).element(by.cssContainingText('option', 'May')).click();
        element(by.name('day')).element(by.cssContainingText('option', '7')).click();
        element(by.name('year')).element(by.cssContainingText('option', '2015')).click();
        element(by.name('attended')).click();
        element(by.name('scheduledAbsent')).click();
        element(by.name('guardian')).sendKeys('Jack Bauer');
        //element(by.name('time')).
        element(by.name('isAdvent')).click();
        element(by.name('adventID')).sendKeys('54fb4354327cd96f26a5c4c7');

        expect(element(by.name('childID')).getAttribute('value')).toEqual('5502cb9770feca48148ec769');
        expect(element(by.name('childName')).getAttribute('value')).toEqual('Morgan Emery');
        expect(element(by.name('month')).getAttribute('value')).toEqual('5');
        expect(element(by.name('day')).getAttribute('value')).toEqual('7');
        expect(element(by.name('year')).getAttribute('value')).toEqual('2015');
        expect(element(by.name('attended')).getAttribute('value')).toEqual('on');
        expect(element(by.name('scheduledAbsent')).getAttribute('value')).toEqual('on');
        expect(element(by.name('guardian')).getAttribute('value')).toEqual('Jack Bauer');
        //expect(element(by.name('time')).
        expect(element(by.name('isAdvent')).getAttribute('value')).toEqual('on');
        expect(element(by.name('adventID')).getAttribute('value')).toEqual('54fb4354327cd96f26a5c4c7');

        browser.sleep(1000);
        element(by.name('submit')).click();

    })

});
// alex put your shit here