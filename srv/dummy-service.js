class DummyService extends cds.ApplicationService {
  init() {
    const { DummyEntity } = cds.entities("cap.sandbox.deploy");

    this.on("READ", "DummyEntity", async (req) => {

      if (!req.user.is('SandboxMember')) {

        return [{ someNumer: 99, someText: `Sorry ${req.user.id}. You're not a member.` }];

      } else {

        return [
          { someNumber: 1, someText: `Welcome ${req.user.id}. These are the rules of the Fight Club.` },
          { someNumber: 1, someText: "The first rule of Fight Club is: you do not talk about Fight Club" },
          { someNumber: 2, someText: "The second rule of Fight Club is: you DO NOT talk about Fight Club! " },
          { someNumber: 2, someText: "Third rule of Fight Club: someone yells 'stop!', goes limp, taps out, the fight is over." }]

      }
    
    });

  }
}

module.exports = DummyService;