import { list } from "postcss";

class Animal {
    nome: string;
    tipoanimal: string;
    raca: string;
    sexo: string;
    descricao: string;
    anos: number;

    constructor(nome: string, tipoanimal: string, raca: string, sexo: string, descricao: string, anos: number) {
        this.nome = nome
        this.tipoanimal = tipoanimal
        this.raca = raca
        this.sexo = sexo
        this.descricao = descricao
        this.anos = anos
      }
}

class Usuario {
    nome: string;
    usuario: string;
    email: string;
    nascimento: Date;
    endereco: string;
    senha: string;
    representacao: string;

    constructor(nome: string, usuario: string, email: string, nascimento: Date, endereco: string, senha: string, representacao: string) {    
        this.nome = nome
        this.usuario = usuario
        this.email = email
        this.nascimento = nascimento
        this.endereco = endereco
        this.senha = senha
        this.representacao = representacao
      }
}

export function cadastroUsuario (nome: string, usuario: string, email: string, nascimento: Date, endereco: string, senha: string, representacao: string) {
    let reg = new Usuario(nome, usuario, email, nascimento, endereco, senha, representacao);
    let local = localStorage.getItem('usuario');
    let json = JSON.parse(local ?? '[]');
    let usuarios: Usuario[] = [];

    usuarios = json.map((usuarioJson: any) => {
        return new Usuario(
            usuarioJson.nome,
            usuarioJson.usuario,
            usuarioJson.email,
            new Date(usuarioJson.nascimento),
            usuarioJson.endereco,
            usuarioJson.senha,
            usuarioJson.representacao
        );
    });

    usuarios.push(reg);

    localStorage.setItem('usuario', JSON.stringify(usuarios.map(usuario => ({...usuario}))));
}

export function cadastroAnimal(nome: string, tipoanimal: string, raca: string, sexo: string, descricao: string, anos: number) {
    let reg = new Animal(nome, tipoanimal, raca, sexo, descricao, anos);

    let local = localStorage.getItem('animal');
    let json = JSON.parse(local ?? '[]');
    let animais: Animal[] = [];

    animais = json.map((animalJson: any) => {
        return new Animal(
            animalJson.nome,
            animalJson.tipoanimal,
            animalJson.raca,
            animalJson.sexo,
            animalJson.descricao,
            animalJson.anos
        );
    });

    animais.push(reg);

    localStorage.setItem('animal', JSON.stringify(animais.map(animal => ({ ...animal }))));
}

export function recuperarAnimais(): Animal[] {
    let animaisJson = localStorage.getItem('animal');
    let animais: Animal[] = [];

    if (animaisJson) {
        animais = JSON.parse(animaisJson).map((animalJson: any) => {
            return new Animal(
                animalJson.nome,
                animalJson.tipoanimal,
                animalJson.raca,
                animalJson.sexo,
                animalJson.descricao,
                animalJson.anos
            );
        });
    }

    return animais;
}