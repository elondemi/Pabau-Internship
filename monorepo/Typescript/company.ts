import { Intern } from "./intern"
import { Junior } from "./junior"

type Country = 'Kosovo' | 'Albania' | 'Germany' | 'France'

interface Company {
    interns: Intern[];
    juniors: Junior[];
    country: Country;
}

export default Company