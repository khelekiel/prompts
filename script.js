const prompts1 = [
    "You are an engineer who designs custom automation equipment for manufacturing companies. Your company is preparing for a visit from a potential client and wants a looping presentation displayed in the lobby. Create a presentation showcasing a newly designed machine, including its purpose and features. The presentation must be technically accurate, informative, and interesting enough to encourage questions.",
    "You are an architect working for a firm specializing in sustainable buildings. Your firm wants a looping presentation displayed during a community event about a new public building project. Create a presentation explaining the sustainability choices, accessibility considerations, and benefits of the project for the community.",
    "You are a construction manager overseeing the development of a new commercial building. Your company wants a looping presentation for potential clients visiting your office. Create a presentation showcasing things that will make a good impression on visitors, such as innovative construction processes you use, safety records, and quality control procedures.",
    "You are a mechanical engineer working for a company that develops energy-efficient heating and cooling systems. Your company wants a looping presentation for a job fair at a university. Create a presentation showcasing the type of engineering work your company does, the technical skills a candidate could develop, the materials and machinery that a candidate might be introduced to, and the safety standards of your company.",
    "You are a chemical engineer working on a water treatment system. Create a looping presentation for a community information center giving technical but understandable details to explain how the system works, what problems it addresses, safety considerations, and benefits to the public.",
    "You are a computer science professional developing an educational technology platform. Create a looping presentation explaining the platform's purpose, features, technical design, accessibility considerations, and benefits for students and instructors.",
    "You are an expert. A client requested seven perpendicular red lines drawn with green and transparent ink, and with one in the form of a kitten. After this experience, your boss concluded that custom client requests need to be vetted before in person meetings with experts. To this end, you have been asked to create a looping presentation for your office's lobby to illustrate in a friendly and informative way how your department will receive requests from clients, how your department can work with the client to meet their goals, and what specific services are actually available to clients."
];


const prompts2 = [
    "You are an expert. A client wants you to draw seven red lines, all strictly perpendicular, some with green ink and some with transparent ink. Also, one of them should be in the form of a kitten. Create a presentation to explain what the possibilities are and how you can most closely meet the client's needs.",
    "You are a chemical engineer. A company wants to replace every chemical used in production with completely natural materials. Your supervisor wants you to create a presentation explaining chemical properties, safety requirements, and why material choices depend on more than whether something is natural.",
    "You are a mechanical engineer. A company wants a machine that uses no replacement parts and requires no inspections. Your supervisor wants you to create a presentation explaining equipment lifecycle management and safety considerations.",
    "You are a software developer whose team has created a new application for businesses. You have been asked to present the product to the company's sales team. Create a presentation explaining how the software works, what its major features are, what problems it solves, and what technical details sales representatives should understand.",
    "You are a computer scientist who developed a new cybersecurity system. You have been invited to explain your work to an audience of professionals outside of computer science. Create a presentation explaining the problem, your solution, how the system works, and why cybersecurity matters.",
    "You are an architect who specializes in sustainable design. Your child's school has invited you to speak for career day. Create a presentation explaining what architects do, how buildings are designed, and how architecture can affect people's lives.",
    "You are a construction manager responsible for workplace safety. You have been invited to speak at a company safety meeting. Create a presentation explaining common construction hazards, safety practices, and how engineering and planning improve workplace safety."
];


let last_prompt1 = -1
function pick_prompt1() {
    let random_index;
    do {
        random_index = Math.floor(Math.random() * prompts1.length);
    } while (random_index === last_prompt1);
    last_prompt1 = random_index;
    document.getElementById("prompt_set1").innerHTML = prompts1[random_index];
}


let last_prompt2 = -1
function pick_prompt2() {
    let random_index;
    do {
        random_index = Math.floor(Math.random() * prompts2.length);
    } while (random_index === last_prompt2);
    last_prompt2 = random_index;
    document.getElementById("prompt_set2").innerHTML = prompts2[random_index];
}
