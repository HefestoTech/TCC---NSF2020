using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    [Table("tb_perfil_acesso")]
    public partial class TbPerfilAcesso
    {
        [Key]
        [Column("id_perfil_acesso")]
        public int IdPerfilAcesso { get; set; }
        [Column("id_funcionario")]
        public int IdFuncionario { get; set; }
        [Required]
        [Column("ds_departamento", TypeName = "varchar(45)")]
        public string DsDepartamento { get; set; }
        [Required]
        [Column("ds_cargo", TypeName = "varchar(45)")]
        public string DsCargo { get; set; }
        [Column("ds_funcao", TypeName = "varchar(45)")]
        public string DsFuncao { get; set; }

        [ForeignKey(nameof(IdFuncionario))]
        [InverseProperty(nameof(TbFuncionario.TbPerfilAcesso))]
        public virtual TbFuncionario IdFuncionarioNavigation { get; set; }
    }
}
