import { browser, element, by } from 'protractor';

describe('Dashboard', () => {
    beforeEach(() => {
    });

    it('should have sidebar', () => {
        browser.get('/');
        
        const sidebar = element(by.css('.sidebar'));

        expect(sidebar).not.toBeNull();
    });

    it('should have 3 info-containers with different headings', () => {
        const containers = element.all(by.css('app-info-container'));
        
        expect(containers.count()).toBe(3);

        expect(containers.get(0).element(by.css('h2')).getText()).toEqual('TypeScript');
        expect(containers.get(1).element(by.css('h2')).getText()).toEqual('Angular2');
        expect(containers.get(2).element(by.css('h2')).getText()).toEqual('Weather');
    });

    it('should have 3rd info-container with different entries and an amount of 10', () => {
        const entries = element.all(by.css('app-info-container:nth-child(2) app-info-entry'));
        
        expect(entries.count()).toBe(10);

        const entry1 = entries.get(0);
        const entry2 = entries.get(1);

        expect(entry1.element(by.css('.entry-header'))).not.toBeNull();
        expect(entry1.element(by.css('.entry-details'))).not.toBeNull();

        expect(entry2.element(by.css('.entry-target'))).not.toBeNull();
        expect(entry2.element(by.css('.views-info'))).not.toBeNull();
        expect(entry2.element(by.css('.entry-tags'))).not.toBeNull();
    });
});