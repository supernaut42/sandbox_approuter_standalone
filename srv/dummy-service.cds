using {sandbox.cap as my} from '../db/schema';

service Dummy {
    
    @requires: 'authenticated-user'
    entity DummyEntity @(restrict: [
        {
            grant: ['READ'],
            to   : ['SandboxMember']
        },
        {
            grant: ['*'],
            to   : ['SandboxAdmin']
        }
    ]) as projection on my.DummyEntity;
}