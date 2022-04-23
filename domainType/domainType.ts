export function domainType(domains: string[]): string[] {
    const domainType = [];

    // for (let i = 0; i < domains.length; i++) {
    //     const domain = domains[i].split('.');
    //     const lastDomain = domain[domain.length - 1]

    //     if (lastDomain === 'org') {
    //         domainType.push('organization');
    //     } else if (lastDomain === 'com') {
    //         domainType.push('commercial')
    //     } else if (lastDomain === 'net') {
    //         domainType.push('network')
    //     } else if (lastDomain === 'info') {
    //         domainType.push('information')
    //     }
    // }
    // return domainType


    // Alternative and shorter

    const domainLookup = {
        'org': 'organization',
        'com': 'commercial',
        'net': 'network',
        'info': 'information',
    }
    return domains.map((domain) => domainLookup[domain.split('.').pop()])
}

// test('domain Type', () => {
//     expect(domainType(['en.wiki.org', 'codefight.com', 'ashish.net', 'code.info'])).toEqual(['organization', 'commercial', 'network', 'information'])
// });

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));